import * as S from './styles'
import localImage from '../../assets/images/icons/localizationIcon.png'
import clock from '../../assets/images/icons/timer.png'
import dressCode from '../../assets/images/icons/dresscode.png'

const EventDetails = () => (
  <S.DetailsContainer>
    <S.InfoGroup>
      <h2>Cerimônia & Recepção</h2>
      <p>Sítio Casa das Pedras</p>
      <p>Av. Gaspar de Lemos, 450</p>
      <p>Ilha de Guaratiba - RJ</p>
      <S.BtnRouteContainer>
        <S.Line></S.Line>
        <S.RouteButton>
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

export default EventDetails
