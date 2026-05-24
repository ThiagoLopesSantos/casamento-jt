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
        Deus escreveu nossa história de uma forma linda e especial. Cada
        detalhe, cada conversa e cada momento nos trouxe até aqui.
        <br />
        <br />
        Agora estamos prestes a viver um dos dias mais importantes das nossas
        vidas, e será uma alegria enorme compartilhar esse momento com pessoas
        tão especiais.
      </S.Text>
    </S.AboutContainer>
  )
}

export default About
