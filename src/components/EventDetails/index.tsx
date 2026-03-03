import * as S from './styles';

const EventDetails = () => (
  <S.DetailsContainer>
    <S.InfoGroup>
      <h3>Cerimônia & Recepção</h3>
      <p>Sítio Casa das Pedras</p>
      <p>Av. Gaspar de Lemos, 450</p>
      <p>Ilha de Guaratiba - RJ</p>
      <S.RouteButton>📍 Traçar Rota</S.RouteButton>
    </S.InfoGroup>

    <S.InfoGroup>
      <h3>Guia do Convidado</h3>
      <S.GuideItem>
        <div>
          <span>⏰</span>
          <strong>Chegue Cedo!</strong>
          <p>Nosso momento começa às 14:30h! Chegue cedo para aproveitar ao máximo.</p>
        </div>
      </S.GuideItem>

      <S.GuideItem>
        <div>
          <span>👗</span>
          <strong>Traje Esporte Fino</strong>
          <p>O evento será ao ar livre, escolha roupas confortáveis e elegantes.</p>
        </div>
      </S.GuideItem>
    </S.InfoGroup>
  </S.DetailsContainer>
);

export default EventDetails;
