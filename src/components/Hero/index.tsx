import * as S from './styles'

const Hero = () => {
  return (
    <S.HeroContainer id="inicio">
      <S.Banner />

      <S.Content>
        <S.SmallText>Com muito amor</S.SmallText>

        <S.Names>
          Jéssica e Thiago
        </S.Names>

        <S.Divider>
          <span>❧</span>
        </S.Divider>

        <S.Date>28 • NOVEMBRO • 2026</S.Date>
      </S.Content>
    </S.HeroContainer>
  )
}

export default Hero
