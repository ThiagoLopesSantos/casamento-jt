import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import * as S from './styles'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzS24gbfhzdeLxEvgqvwdk6Snbm6LQDeCsqI_VPc8w_hTI2car8omHFSbjEMZKuWmKO9g/exec'

const CHAVE_PIX = '15470236781'
const NOME_RECEBEDOR = 'THIAGO LOPES SANTOS'
const CIDADE_RECEBEDOR = 'RIO DE JANEIRO'

function crc16(data: string): string {
  let crc = 0xffff

  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8

    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1
    }
  }

  return (crc & 0xffff).toString(16).toUpperCase().padStart(4, '0')
}

function gerarPayloadPix(
  chave: string,
  valor: string,
  recebedor: string,
  cidade: string
) {
  const valorFormatado = parseFloat(
    valor.replace('R$ ', '').replace(',', '.')
  ).toFixed(2)

  const p_chave = `0014br.gov.bcb.pix01${chave.length
    .toString()
    .padStart(2, '0')}${chave}`

  const payloadBase = [
    '000201',
    '26',
    p_chave.length.toString().padStart(2, '0'),
    p_chave,
    '52040000',
    '5303986',
    '54',
    valorFormatado.length.toString().padStart(2, '0'),
    valorFormatado,
    '5802BR',
    '59',
    recebedor.length.toString().padStart(2, '0'),
    recebedor,
    '60',
    cidade.length.toString().padStart(2, '0'),
    cidade,
    '62070503***',
    '6304'
  ].join('')

  return payloadBase + crc16(payloadBase)
}

const RSVP: React.FC = () => {
  const [etapa, setEtapa] = useState<1 | 2 | 3 | 4 | 5 | 6>(1)

  const [nome, setNome] = useState('')
  const [celular, setCelular] = useState('')
  const [valorSelecionado, setValorSelecionado] = useState('R$ 20')

  const [copiado, setCopiado] = useState(false)
  const [contribuiu, setContribuiu] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const pixPayload =
    valorSelecionado === 'Outro'
      ? CHAVE_PIX
      : gerarPayloadPix(
          CHAVE_PIX,
          valorSelecionado,
          NOME_RECEBEDOR,
          CIDADE_RECEBEDOR
        )

  const salvarPresenca = async (presenca: 'Confirmado' | 'Cancelado') => {
    const formData = new FormData()

    formData.append('nome', nome)
    formData.append('celular', celular)
    formData.append('presenca', presenca)
    formData.append('contribuiu', contribuiu ? 'Sim' : 'Não')

    await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
  }

  const confirmarSemPix = async () => {
    setEnviando(true)

    setContribuiu(false)

    await salvarPresenca('Confirmado')

    setEtapa(4)

    setEnviando(false)
  }

  const irParaPix = () => {
    setContribuiu(true)
    setEtapa(3)
  }

  const finalizarComPix = async () => {
    setEnviando(true)

    await salvarPresenca('Confirmado')

    setEtapa(4)

    setEnviando(false)
  }

  const copiarChave = () => {
    navigator.clipboard.writeText(pixPayload)

    setCopiado(true)

    setTimeout(() => {
      setCopiado(false)
    }, 2000)
  }

  const reiniciar = () => {
    setEtapa(1)
    setNome('')
    setCelular('')
    setValorSelecionado('R$ 20')
    setContribuiu(false)
  }

  return (
    <S.RSVPContainer className="reveal" id="rsvp">
      {/* ETAPA 1 */}
      {etapa === 1 && (
        <>
          {/* <S.Title>Confirmação de Presença</S.Title> */}

          <S.SearchInput
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <S.SearchInput
            placeholder="Celular (WhatsApp)"
            value={celular}
            onChange={(e) => {
              let v = e.target.value.replace(/\D/g, '')

              // limite 11 dígitos
              if (v.length > 11) return

              v = v.replace(/^(\d{2})(\d)/g, '($1) $2')

              v = v.replace(/(\d{5})(\d)/, '$1-$2')

              setCelular(v)
            }}
          />

          <S.SubmitButton
            onClick={() => {
              if (!nome || !celular) {
                alert('Preencha todos os campos')
                return
              }

              if (nome.trim().split(' ').length < 2) {
                alert('Digite nome e sobrenome')
                return
              }

              if (celular.replace(/\D/g, '').length < 10) {
                alert('Digite um celular válido')
                return
              }

              setEtapa(2)
            }}
          >
            Continuar
          </S.SubmitButton>

          <button className="jump-link" onClick={() => setEtapa(5)}>
            Já confirmei / Preciso cancelar a presença
          </button>
        </>
      )}

      {/* ETAPA 2 */}
      {etapa === 2 && (
        <S.StepBox>
          <S.Title>Olá, {nome}!</S.Title>

          <S.Description>
            Obrigado por desejar festejar conosco!
            <br />
            Deseja contribuir com nossa lua de mel?
          </S.Description>

          <S.ButtonGroup>
            <S.SubmitButton onClick={irParaPix}>
              Sim, quero contribuir 💚
            </S.SubmitButton>

            <button
              className="jump-link"
              disabled={enviando}
              onClick={confirmarSemPix}
            >
              {enviando
                ? 'Enviando...'
                : 'Nosso presente é você! Apenas confirmar presença'}
            </button>
          </S.ButtonGroup>
        </S.StepBox>
      )}

      {/* ETAPA 3 */}
      {etapa === 3 && (
        <S.StepBox>
          <S.Title>Presente para nossa lua de mel</S.Title>

          <S.Description>
            Obrigado por desejar fazer parte desse momento tão especial 💚
            <br />
            Sua contribuição nos ajudará a construir memórias incríveis na nossa
            primeira viagem como casados.
          </S.Description>

          <p>Escolha um valor:</p>

          <S.ValueGrid>
            {['R$ 20', 'R$ 50', 'R$ 100', 'Outro'].map((v) => (
              <S.ValueCard
                key={v}
                $active={valorSelecionado === v}
                onClick={() => setValorSelecionado(v)}
              >
                {v}
              </S.ValueCard>
            ))}
          </S.ValueGrid>

          <S.QRBox>
            <QRCodeSVG value={pixPayload} size={180} />
          </S.QRBox>

          <S.Description>
            Após realizar o PIX, finalize sua confirmação abaixo 💚
          </S.Description>

          <S.CopyButton onClick={copiarChave}>
            {copiado ? '✅ Copiado!' : '📋 Copiar Pix'}
          </S.CopyButton>

          {copiado && <p>Chave copiada com sucesso!</p>}

          <S.SubmitButton disabled={enviando} onClick={finalizarComPix}>
            {enviando ? 'Confirmando...' : 'Já realizei o PIX 💚'}
          </S.SubmitButton>
        </S.StepBox>
      )}

      {/* ETAPA 4 */}
      {etapa === 4 && (
        <S.SuccessBox>
          {contribuiu ? (
            <>
              <h3>Presença confirmada</h3>

              <p>
                {nome}, sua presença já seria um presente enorme para nós.
                <br />
                <br />
                Mas sua contribuição para nossa lua de mel tornou tudo ainda
                mais especial ✨
                <br />
                <br />
                Obrigado por fazer parte desse momento tão importante das nossas
                vidas.
              </p>
            </>
          ) : (
            <>
              <h3>Presença confirmada!</h3>

              <p>
                Obrigado, {nome}!  Sua presença foi confirmada com sucesso.
                Estamos muito felizes em ter você com a gente!
              </p>
            </>
          )}

          <S.SubmitButton onClick={reiniciar}>Voltar ao início</S.SubmitButton>
        </S.SuccessBox>
      )}

      {/* ETAPA 5 */}
      {etapa === 5 && (
        <S.StepBox>
          <S.Title>Cancelar presença</S.Title>

          <S.SearchInput
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <S.SearchInput
            placeholder="Celular"
            value={celular}
            onChange={(e) => {
              let v = e.target.value.replace(/\D/g, '')

              if (v.length > 11) return

              v = v.replace(/^(\d{2})(\d)/g, '($1) $2')

              v = v.replace(/(\d{5})(\d)/, '$1-$2')

              setCelular(v)
            }}
          />

          <S.SubmitButton
            onClick={async () => {
              if (!nome || !celular) {
                alert('Preencha todos os campos')
                return
              }

              if (nome.trim().split(' ').length < 2) {
                alert('Digite nome e sobrenome')
                return
              }

              if (celular.replace(/\D/g, '').length < 10) {
                alert('Celular inválido')
                return
              }

              await salvarPresenca('Cancelado')

              setEtapa(6)
            }}
          >
            Cancelar minha presença
          </S.SubmitButton>
        </S.StepBox>
      )}

      {/* ETAPA 6 */}
      {etapa === 6 && (
        <S.SuccessBox>
          <h3>Presença cancelada</h3>

          <p>
            Entendemos, {nome}. Sentiremos sua falta, mas esperamos te ver em
            outra ocasião 💚
          </p>

          <S.SubmitButton onClick={reiniciar}>Voltar ao início</S.SubmitButton>
        </S.SuccessBox>
      )}
    </S.RSVPContainer>
  )
}

export default RSVP
