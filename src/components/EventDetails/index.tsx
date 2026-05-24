import { useState } from 'react'
import * as S from './styles'
import localImage from '../../assets/images/icons/localizationIcon.png'

const EventDetails: React.FC = () => {
  const [origem, setOrigem] = useState('')

  const tracarRota = () => {
    if (!origem.trim()) {
      alert('Por favor, digite seu endereço ou cidade de partida.')
      return
    }

    const destino =
      'Casa das Pedras Festas e Eventos, Av. Gaspar de Lemos, 450 - Ilha de Guaratiba, Rio de Janeiro - RJ, 23020-110'

    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      origem
    )}&destination=${encodeURIComponent(destino)}`

    window.open(url, '_blank')
  }

  return (
    <S.EventContainer id="cerimonia" className="reveal">
      <S.IconWrapper>
        <span>⌂</span>
      </S.IconWrapper>

      <S.SectionLabel>Cerimônia & Recepção</S.SectionLabel>

      <S.Line />

      <S.Place>Sítio Casa das Pedras</S.Place>

      <S.Time>Cerimônia às 15:00</S.Time>

      <S.Address>
        Av. Gaspar de Lemos, 450
        <br />
        Ilha de Guaratiba - RJ
      </S.Address>

      <S.InputRota
        type="text"
        placeholder="Digite sua localização..."
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
      />

      <S.RouteButton onClick={tracarRota}>
        <img src={localImage} alt="" />
        Ver no mapa
      </S.RouteButton>

      <S.LinkInstagram>
        <a
          href="https://www.instagram.com/casa_das_pedras_festas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨ Conheça nossa casa de festas
        </a>
      </S.LinkInstagram>
    </S.EventContainer>
  )
}

export default EventDetails
