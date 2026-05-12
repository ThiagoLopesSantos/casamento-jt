import React, { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { LISTA_CONVIDADOS } from '../../data/convidados'
import type { Convidado } from '../../data/convidados'
import * as S from './styles'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyu89m7sIrC49eMAP32Em2LcOffE3zIjHQle59UdyglyO1YWVjOlB9tk2C80Zp3l8I9Og/exec'
const CHAVE_PIX = '15470236781'
const NOME_RECEBEDOR = 'THIAGO LOPES SANTOS'
const CIDADE_RECEBEDOR = 'RIO DE JANEIRO'

function crc16(data: string): string {
  let crc = 0xFFFF
  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1
    }
  }
  return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0')
}

function gerarPayloadPix(chave: string, valor: string, recebedor: string, cidade: string) {
  const valorFormatado = parseFloat(valor.replace('R$ ', '').replace(',', '.')).toFixed(2)
  const p_chave = `0014br.gov.bcb.pix01${chave.length.toString().padStart(2, '0')}${chave}`
  const payloadBase = [
    '000201',
    '26', p_chave.length.toString().padStart(2, '0'), p_chave,
    '52040000', '5303986',
    '54', valorFormatado.length.toString().padStart(2, '0'), valorFormatado,
    '5802BR',
    '59', recebedor.length.toString().padStart(2, '0'), recebedor,
    '60', cidade.length.toString().padStart(2, '0'), cidade,
    '62070503***', '6304'
  ].join('')
  return payloadBase + crc16(payloadBase)
}

const RSVP: React.FC = () => {
  const [etapa, setEtapa] = useState<1 | 2 | 3 | 4 | 5>(1)
  const [busca, setBusca] = useState('')
  const [resultados, setResultados] = useState<Convidado[]>([])
  const [selecionado, setSelecionado] = useState<Convidado | null>(null)
  const [jaConfirmado, setJaConfirmado] = useState(false)
  const [valorSelecionado, setValorSelecionado] = useState('R$ 20')
  const [copiado, setCopiado] = useState(false)
  const [carregando, setCarregando] = useState(false)

  const pixPayload = valorSelecionado === 'Outro'
    ? CHAVE_PIX
    : gerarPayloadPix(CHAVE_PIX, valorSelecionado, NOME_RECEBEDOR, CIDADE_RECEBEDOR)

  useEffect(() => {
    if (busca.length > 2) {
      const filtrados = LISTA_CONVIDADOS.filter((c) =>
        c.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(
          busca.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        )
      )
      setResultados(filtrados)
    } else {
      setResultados([])
    }
  }, [busca])

  const verificarPresenca = async (convidado: Convidado) => {
    setSelecionado(convidado)
    setCarregando(true)
    try {
      const res = await fetch(`${SCRIPT_URL}?nome=${encodeURIComponent(convidado.nome)}`)
      const json = await res.json()
      setJaConfirmado(json.encontrado && json.presenca === 'Confirmado')
    } catch {
      setJaConfirmado(false)
    } finally {
      setCarregando(false)
      setEtapa(2)
    }
  }

  const salvarPresenca = async (presenca: 'Confirmado' | 'Cancelado') => {
    if (!selecionado) return
    const formData = new FormData()
    formData.append('nome', selecionado.nome)
    formData.append('presenca', presenca)
    fetch(SCRIPT_URL, { method: 'POST', body: formData, mode: 'no-cors' })
  }

  const confirmarPresenca = async () => {
    await salvarPresenca('Confirmado')
    setEtapa(4)
  }

  const cancelarPresenca = async () => {
    await salvarPresenca('Cancelado')
    setEtapa(5)
  }

  const finalizarComPix = async () => {
    await salvarPresenca('Confirmado')
    setEtapa(4)
  }

  const copiarChave = () => {
    navigator.clipboard.writeText(pixPayload)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  const reiniciar = () => {
    setEtapa(1)
    setBusca('')
    setResultados([])
    setSelecionado(null)
    setJaConfirmado(false)
    setValorSelecionado('R$ 20')
  }

  return (
    <S.RSVPContainer id="rsvp">

      {/* ETAPA 1 — Busca */}
      {etapa === 1 && (
        <>
          <S.Title>Confirmar Presença</S.Title>
          <S.Description>Digite seu nome para confirmar sua presença no nosso grande dia.</S.Description>
          <S.SearchInput
            placeholder="Ex: Aline Santiago"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <S.ResultList>
            {resultados.map((c) => (
              <S.ResultItem
                key={c.id}
                $active={selecionado?.id === c.id}
                onClick={() => !carregando && verificarPresenca(c)}
              >
                {carregando && selecionado?.id === c.id ? 'Verificando...' : c.nome}
              </S.ResultItem>
            ))}
          </S.ResultList>
        </>
      )}

      {/* ETAPA 2 — Confirmar ou Cancelar */}
      {etapa === 2 && (
        <S.StepBox>
          <S.Title>Olá, {selecionado?.nome}!</S.Title>
          {jaConfirmado ? (
            <>
              <S.Description>Você já confirmou sua presença. Deseja cancelar?</S.Description>
              <S.ButtonGroup>
                <S.SubmitButton onClick={cancelarPresenca}>Cancelar minha presença</S.SubmitButton>
                <button className="jump-link" onClick={reiniciar}>Voltar</button>
              </S.ButtonGroup>
            </>
          ) : (
            <>
              <S.Description>Sua presença é muito importante! Gostaria de presentear os noivos com uma contribuição para a Lua de Mel?</S.Description>
              <S.ButtonGroup>
                <S.SubmitButton onClick={() => setEtapa(3)}>Sim, com certeza! 😍</S.SubmitButton>
                <button className="jump-link" onClick={confirmarPresenca}>Sua presença já é nosso presente!</button>
              </S.ButtonGroup>
            </>
          )}
        </S.StepBox>
      )}

      {/* ETAPA 3 — Pix */}
      {etapa === 3 && (
        <S.StepBox>
          <S.Title>Operação Lua de Mel ✈️</S.Title>
          <p>Selecione um valor para gerar o QR Code:</p>
          <S.ValueGrid>
            {['R$ 20', 'R$ 50', 'R$ 100', 'Outro'].map((v) => (
              <S.ValueCard key={v} $active={valorSelecionado === v} onClick={() => setValorSelecionado(v)}>
                {v}
              </S.ValueCard>
            ))}
          </S.ValueGrid>
          <S.QRBox>
            <QRCodeSVG value={pixPayload} size={180} fgColor="#6F7D5C" />
          </S.QRBox>
          <S.CopyButton onClick={copiarChave}>
            {copiado ? '✅ Código Copiado!' : '📋 Copiar Pix Copia e Cola'}
          </S.CopyButton>
          <S.SubmitButton onClick={finalizarComPix}>Concluir Confirmação</S.SubmitButton>
        </S.StepBox>
      )}

      {/* ETAPA 4 — Sucesso com Pix */}
      {etapa === 4 && (
        <S.SuccessBox>
          <h3>🎉 Tudo certo!</h3>
          <p>Obrigado por confirmar e pelo carinho, {selecionado?.nome}. Nos vemos no altar!</p>
          <S.SubmitButton onClick={reiniciar}>Voltar ao Início</S.SubmitButton>
        </S.SuccessBox>
      )}

      {/* ETAPA 5 — Presença cancelada */}
      {etapa === 5 && (
        <S.SuccessBox>
          <h3>😢 Que pena!</h3>
          <p>Sua presença foi cancelada, {selecionado?.nome}. Esperamos te ver em outro momento!</p>
          <S.SubmitButton onClick={reiniciar}>Voltar ao Início</S.SubmitButton>
        </S.SuccessBox>
      )}

    </S.RSVPContainer>
  )
}

export default RSVP
