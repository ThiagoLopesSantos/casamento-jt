import * as S from './styles'
import aboutPhoto from '../../assets/images/gallery/thiagoEjess.jpg'

const About = () => {
  return (
    <S.AboutContainer className="reveal" id="sobre">
      <S.TextContent>
        <S.SmallText>Nossa história</S.SmallText>

        <S.Title>Do encontro ao nosso sim</S.Title>

        <S.Description>
          Deus escreveu nossa história de uma forma linda e especial. Cada
          detalhe, cada conversa e cada momento nos trouxe até aqui.
        </S.Description>

        <S.Description>
          Agora estamos prestes a viver um dos dias mais importantes das nossas
          vidas, e será uma alegria enorme compartilhar esse momento com pessoas
          tão especiais.
        </S.Description>
      </S.TextContent>

      <S.ImageWrapper>
        <S.Image src={aboutPhoto} alt="Thiago e Jéssica" />
      </S.ImageWrapper>
    </S.AboutContainer>
  )
}

export default About
