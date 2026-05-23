import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CountdownContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  text-align: center;
  background: ${theme.colors.white};
  border-top: 1px solid rgba(200, 155, 90, 0.18);
  border-bottom: 1px solid rgba(200, 155, 90, 0.18);
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  margin-bottom: 2.5rem;
`

export const TimerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 720px;
  margin: 0 auto 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const TimeBox = styled.div`
  background: ${theme.colors.background};
  border: 1px solid rgba(200, 155, 90, 0.25);
  border-radius: 24px;
  padding: 1.5rem 1rem;

  strong {
    display: block;
    font-family: ${theme.fonts.title};
    font-size: clamp(2.4rem, 5vw, 4rem);
    color: ${theme.colors.fuchsia};
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    color: ${theme.colors.primaryGreen};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.72rem;
    font-weight: 600;
  }
`

export const Message = styled.p`
  max-width: 520px;
  margin: 0 auto;
  color: ${theme.colors.mutedText};
`
