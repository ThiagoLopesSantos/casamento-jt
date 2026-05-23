import { useState } from 'react'

import * as S from './styles'
import localImage from '../../assets/images/icons/localizationIcon.png'
import clock from '../../assets/images/icons/timer.png'
import dressCode from '../../assets/images/icons/dresscode.png'

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
    <S.DetailsContainer className="reveal" id="cerimonia">
      <S.Card>
        <S.SmallText>O grande dia</S.SmallText>

        <S.Title>Cerimônia & Recepção</S.Title>

        <S.PlaceName>Sítio Casa das Pedras</S.PlaceName>

        <S.Address>
          Av. Gaspar de Lemos, 450
          <br />
          Ilha de Guaratiba - RJ
        </S.Address>

        <S.LinkInstagram>
          <a
            href="https://www.instagram.com/casa_das_pedras_festas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            ✨ Conheça nossa casa de festas
          </a>
        </S.LinkInstagram>

        <S.RouteBox>
          <S.InputRota
            type="text"
            placeholder="Digite sua localização..."
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />

          <S.RouteButton onClick={tracarRota}>
            <img src={localImage} alt="" />
            Traçar Rota
          </S.RouteButton>
        </S.RouteBox>
      </S.Card>

      <S.Card>
        <S.SmallText>Informações</S.SmallText>

        <S.Title>Guia do Convidado</S.Title>

        <S.GuideList>
          <S.GuideItem>
            <S.IconCircle>
              <img src={clock} alt="" />
            </S.IconCircle>

            <div>
              <strong>Chegue cedo!</strong>
              <p>
                Nosso momento começa às 14:30h. Chegue com tranquilidade para
                aproveitar cada detalhe.
              </p>
            </div>
          </S.GuideItem>

          <S.GuideItem>
            <S.IconCircle>
              <img src={dressCode} alt="" />
            </S.IconCircle>

            <div>
              <strong>Traje esporte fino</strong>
              <p>
                O evento será ao ar livre. Escolha roupas confortáveis,
                elegantes e leves.
              </p>
            </div>
          </S.GuideItem>
        </S.GuideList>
      </S.Card>
    </S.DetailsContainer>
  )
}

export default EventDetails
