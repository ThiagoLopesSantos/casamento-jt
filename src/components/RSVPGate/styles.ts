import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const WaitingContainer = styled.section`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 7rem 2rem;
  text-align: center;
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 1;
  margin-bottom: 1.5rem;
`

export const Message = styled.p`
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 1rem;
`

export const Note = styled.p`
  color: ${theme.colors.fuchsia};
  font-weight: 500;
`
