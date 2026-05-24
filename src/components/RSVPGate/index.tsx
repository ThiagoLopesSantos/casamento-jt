import RSVP from '../RSVP'
import * as S from './styles'

const RSVP_RELEASE_DATE = new Date('2026-09-01T00:00:00')

const RSVPGate = () => {
  const now = new Date()
  const rsvpLiberado = now >= RSVP_RELEASE_DATE

  if (rsvpLiberado) {
    return <RSVP />
  }

  return (
    <S.WaitingContainer id="rsvp" className="reveal">
      <S.Card>
        <S.SmallText>Confirmação de presença</S.SmallText>

        <S.Title>Em breve</S.Title>

        <S.Divider>
          <span>❧</span>
        </S.Divider>

        <S.Message>
          As confirmações de presença serão abertas oficialmente em setembro de
          2026.
        </S.Message>

        <S.Note>
          Por enquanto, guarde essa data com carinho. Será uma alegria viver
          esse momento com você 💚
        </S.Note>
      </S.Card>
    </S.WaitingContainer>
  )
}

export default RSVPGate
