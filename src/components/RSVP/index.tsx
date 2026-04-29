import React, { useState, useEffect } from 'react'
import { LISTA_CONVIDADOS } from '../../data/convidados'
import type { Convidado } from '../../data/convidados'
import { QRCodeSVG } from 'qrcode.react'
import * as S from './styles'

// --- FUNÇÕES AUXILIARES PARA O PIX (FORA DO COMPONENTE) ---

function crc16(data: string): string {
  let crc = 0xFFFF;
  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
    }
  }
  return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

function gerarPayloadPix(chave: string, valor: string, recebedor: string, cidade: string) {
  const valorNum = valor.replace('R$ ', '').replace(',', '.');
  const valorFormatado = parseFloat(valorNum).toFixed(2);

  const p_chave = `0014br.gov.bcb.pix01${chave.length.toString().padStart(2, '0')}${chave}`;

  const payloadBase = [
    '000201',
    '26', p_chave.length.toString().padStart(2, '0'), p_chave,
    '52040000',
    '5303986',
    '54', valorFormatado.length.toString().padStart(2, '0'), valorFormatado,
    '5802BR',
    '59', recebedor.length.toString().padStart(2, '0'), recebedor,
    '60', cidade.length.toString().padStart(2, '0'), cidade,
    '62070503***',
    '6304'
  ].join('');

  return payloadBase + crc16(payloadBase);
}

// --- COMPONENTE PRINCIPAL ---

const RSVP: React.FC = () => {
  const [etapa, setEtapa] = useState(1) // 1: Busca, 2: Pergunta Pix, 3: Valores/QR, 4: Sucesso
  const [busca, setBusca] = useState('')
  const [resultados, setResultados] = useState<Convidado[]>([])
  const [selecionado, setSelecionado] = useState<Convidado | null>(null)
  const [valorSelecionado, setValorSelecionado] = useState<string>('R$ 20')
  const [copiado, setCopiado] = useState(false)

  // CONFIGURAÇÕES DO PIX
  const CHAVE_PIX = '15470236781'
  const NOME_RECEBEDOR = 'THIAGO LOPES SANTOS' // MAIÚSCULAS E SEM ACENTOS
  const CIDADE_RECEBEDOR = 'RIO DE JANEIRO' // MAIÚSCULAS E SEM ACENTOS

  // Payload calculado dinamicamente
  const pixPayload = valorSelecionado === 'Outro'
    ? CHAVE_PIX
    : gerarPayloadPix(CHAVE_PIX, valorSelecionado, NOME_RECEBEDOR, CIDADE_RECEBEDOR);

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

  const copiarChave = () => {
    navigator.clipboard.writeText(pixPayload)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  const finalizarConfirmacao = async () => {
    if (!selecionado) return
    setEtapa(4)

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwq_EqUQRBxShVIvjVymLNkf_Ogw1vpIXlQNLPSsyTAwCnE8jT3XU1-0l7WboL5VmHr/exec'
      const formData = new FormData()
      formData.append('nome', selecionado.nome)
      formData.append('contribuicao', valorSelecionado)

      fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
    } catch (e) {
      console.error('Erro ao salvar na planilha:', e)
    }
  }

  return (
    <S.RSVPContainer id="rsvp">
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
                onClick={() => { setSelecionado(c); setEtapa(2); }}
              >
                {c.nome}
              </S.ResultItem>
            ))}
          </S.ResultList>
        </>
      )}

      {etapa === 2 && (
        <S.StepBox>
          <S.Title>Olá, {selecionado?.nome}!</S.Title>
          <S.Description>
            Sua presença é muito importante! Gostaria de presentear os noivos com uma contribuição para a Lua de Mel?
          </S.Description>
          <S.ButtonGroup>
            <S.SubmitButton onClick={() => setEtapa(3)}>Sim, com certeza! 😍</S.SubmitButton>
            <button className="jump-link" onClick={finalizarConfirmacao}>Agora não, apenas confirmar</button>
          </S.ButtonGroup>
        </S.StepBox>
      )}

      {etapa === 3 && (
        <S.StepBox>
          <S.Title>Operação Lua de Mel ✈️</S.Title>
          <p>Selecione um valor para gerar o QR Code:</p>
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
            <QRCodeSVG value={pixPayload} size={180} fgColor="#6F7D5C" />
          </S.QRBox>

          <S.CopyButton onClick={copiarChave}>
            {copiado ? '✅ Código Copiado!' : '📋 Copiar Pix Copia e Cola'}
          </S.CopyButton>

          <S.SubmitButton onClick={finalizarConfirmacao}>Concluir Confirmação</S.SubmitButton>
        </S.StepBox>
      )}

      {etapa === 4 && (
        <S.SuccessBox>
          <h3>🎉 Tudo certo!</h3>
          <p>Obrigado por confirmar, {selecionado?.nome}. Nos vemos no altar!</p>
          <S.SubmitButton onClick={() => window.location.reload()}>Voltar ao Início</S.SubmitButton>
        </S.SuccessBox>
      )}
    </S.RSVPContainer>
  )
}

export default RSVP
