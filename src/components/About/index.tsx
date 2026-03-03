import * as S from './styles'
import jtPhoto from '../../assets/images/thiagoEjess.jpg'


const About = () => (
<S.AboutContainer>
    <S.Title>Sobre Nós</S.Title>
    <S.StoryText>
      Nossa história começou em 11 de novembro de 2024, em uma simples conversa que mudou tudo.
      Entre mensagens e risadas, Deus foi unindo dois corações. Aprendemos a amar, crescer e caminhar lado a lado.
    </S.StoryText>
    <S.CoupleImage src={jtPhoto} alt="Jéssica e Thiago" />
  </S.AboutContainer>
)


export default About
