import * as S from './styles'

const About = () => {
  return (
    <S.AboutContainer id="sobre" className="reveal">
      <S.IconWrapper>
        <span>❀</span>
      </S.IconWrapper>

      <S.SectionLabel>Sobre Nós</S.SectionLabel>

      <S.Line />

      <S.Text>
        Nossa história começou em 11 de novembro de 2024, em uma simples
        conversa que mudou tudo.
        <br />
        <br />
        Entre mensagens e risadas, Deus foi unindo dois corações e escrevendo
        uma linda história de amor.
      </S.Text>

      <S.Button href="#galeria">
        Conheça nossa história
      </S.Button>
    </S.AboutContainer>
  )
}

export default About
