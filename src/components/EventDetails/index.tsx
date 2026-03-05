import { useState } from 'react'

import * as S from './styles'
import localImage from '../../assets/images/icons/localizationIcon.png'
import clock from '../../assets/images/icons/timer.png'
import dressCode from '../../assets/images/icons/dresscode.png'

const EventDetails: React.FC = () => {

  const [origem, setOrigem] = useState('');

  const tracarRota = () => {
    if (!origem.trim()) {
      alert("Por favor, digite seu endereço ou cidade de partida.");
      return;
    }

    const destino = "Av. Gaspar de Lemos, 450, Ilha de Guaratiba, RJ";
    // URL oficial do Google Maps para direções
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origem)}&destination=${encodeURIComponent(destino)}`;

    window.open(url, "_blank");
  };

  return (

    <S.DetailsContainer>
      <S.InfoGroup>

        <h2>Cerimônia & Recepção</h2>

        <p>Sítio Casa das Pedras</p>
        <p>Av. Gaspar de Lemos, 450</p>
        <p>Ilha de Guaratiba - RJ</p>

        <S.InputRota
            type="text"
            placeholder="Digite sua localização..."
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />

        <S.BtnRouteContainer>
          <S.Line></S.Line>
          <S.RouteButton onClick={tracarRota}>
            <img src={localImage} alt="Local Image" /> Traçar Rota
          </S.RouteButton>
          <S.Line></S.Line>
        </S.BtnRouteContainer>
      </S.InfoGroup>

      <S.InfoGroup>
        <h2>Guia do Convidado</h2>
        <S.GuideItem>
          <img src={clock} alt="Local Image" />
          <div>
            <strong>Chegue Cedo!</strong>
            <p>
              Nosso momento começa às 14:30h! Chegue cedo para aproveitar ao
              máximo.
            </p>
          </div>
        </S.GuideItem>

        <S.GuideItem>
          <img id="dress" src={dressCode} alt="Local Image" />
          <div>
            <strong>Traje Esporte Fino</strong>
            <p>
              O evento será ao ar livre, escolha roupas confortáveis e elegantes.
            </p>
          </div>
        </S.GuideItem>
      </S.InfoGroup>
    </S.DetailsContainer>
  )

}

export default EventDetails
