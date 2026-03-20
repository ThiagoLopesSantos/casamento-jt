import React, { useState } from 'react'
import * as S from './styles'

const RSVP: React.FC = () => {
  const [nome, setNome] = useState('')
  const [convidados, setConvidados] = useState('1')
  const [mensagem, setMensagem] = useState('')

  const handleEnviar = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim()) {
      alert('Por favor, digite seu nome.')
      return
    }

    // Configure o número do seu WhatsApp aqui (DDI + DDD + Número)
    const meuWhatsApp = '5521979095061'

    const texto =
      `Olá! Me chamo *${nome}* e estou confirmando minha presença no casamento de Jéssica e Thiago.%0A%0A` +
      `*Total de pessoas:* ${convidados}%0A` +
      (mensagem ? `*Recadinho:* ${mensagem}` : '')

    const url = `https://api.whatsapp.com/send?phone=${meuWhatsApp}&text=${texto}`

    window.open(url, '_blank')
  }

  return (
    <S.RSVPSection id="rsvp">
      <S.Title>Confirmar Presença</S.Title>
      <S.Description>
        É muito importante para nós que você confirme sua presença até o dia
        28/10/2026.
      </S.Description>

      <S.Form onSubmit={handleEnviar}>
        <S.InputGroup>
          <label>Nome Completo</label>
          <input
            type="text"
            placeholder="Como está no convite"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Quantas pessoas (incluindo você)?</label>
          <select
            value={convidados}
            onChange={(e) => setConvidados(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'pessoa' : 'pessoas'}
              </option>
            ))}
          </select>
        </S.InputGroup>

        <S.InputGroup>
          <label>Algum recado para nós?</label>
          <textarea
            rows={3}
            placeholder="Ex: Mal podemos esperar!"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </S.InputGroup>

        <S.SubmitButton type="submit">
          Enviar Confirmação via WhatsApp
        </S.SubmitButton>
      </S.Form>
    </S.RSVPSection>
  )
}

export default RSVP
