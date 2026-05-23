import About from '../About'
import EventDetails from '../EventDetails'
import * as S from './styles'

const ContentSection = () => {
  return (
    <S.ContentWrapper>
      <About />
      <EventDetails />
    </S.ContentWrapper>
  )
}

export default ContentSection
