import * as S from './styles';
import divider from "../../assets/images/imageDivider.png";

const SectionDivider = () => (
  <S.DividerContainer>
    <S.Line></S.Line>
    <S.DividerImage src={divider} alt="Monograma" />
    <S.Line></S.Line>
  </S.DividerContainer>
);

export default SectionDivider
