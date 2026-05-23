import About from '../About'
import EventDetails from '../EventDetails'
import * as S from './styles'

const ContentSection = () => {
  return (
    <S.ContentWrapper>
      <S.ContentGrid>
        <S.Column>
          <About />
        </S.Column>

        <S.Divider>
          <span>❧</span>
        </S.Divider>

        <S.Column>
          <EventDetails />
        </S.Column>
      </S.ContentGrid>
    </S.ContentWrapper>
  )
}

export default ContentSection
