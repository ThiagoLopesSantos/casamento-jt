import * as S from './styles';
import gardem from "../../assets/images/gardem.png";

const Hero = () => (
  <S.HeroContainer>
    <S.HeroImage src={gardem} alt="Ilustração" />
    <S.Title>Jéssica & Thiago</S.Title>
    <S.Date>28 • NOVEMBRO • 2026</S.Date>
    <S.BtnConfirmContainer>
      <S.Line></S.Line>
      <S.ConfirmButton>Confirmar Presença</S.ConfirmButton>
      <S.Line></S.Line>
    </S.BtnConfirmContainer>
  </S.HeroContainer>
);

export default Hero;
