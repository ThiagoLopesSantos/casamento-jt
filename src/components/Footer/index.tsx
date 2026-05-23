import * as S from './styles'
import monogram from '../../assets/images/icons/monograma3.png'


const Footer = () => {
  return (
    <S.FooterContainer className="reveal" id="footer">
      <S.Monogram>
        <img src={monogram} alt="Monograma" />
      </S.Monogram>

      <S.Names>Jéssica & Thiago</S.Names>

      <S.Date>28 • NOVEMBRO • 2026</S.Date>

      <S.Message>Obrigado por fazer parte da nossa história.</S.Message>

      <S.Location>Rio de Janeiro — RJ</S.Location>
    </S.FooterContainer>
  )
}

export default Footer
