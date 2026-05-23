import * as S from './styles'

const Hero = () => {
  return (
    <S.HeroContainer id="inicio">
      <S.Banner />

      <S.Content>
        <S.SmallText>Com muito amor</S.SmallText>

        <S.Names>
          Jéssica <span>E</span> Thiago
        </S.Names>

        <S.Date>28 • NOVEMBRO • 2026</S.Date>

        <S.Description>
          Estamos muito felizes em compartilhar esse momento especial com você.
        </S.Description>

        <S.Button href="#rsvp">Confirmar presença</S.Button>
      </S.Content>
    </S.HeroContainer>
  )
}

export default Hero
