import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const WaitingContainer = styled.section`
  width: 100%;
  padding: 5rem 2rem 7rem;
  background: ${theme.colors.background};
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  width: 100%;

  text-align: center;

  padding: 4rem 2rem;

  background: ${theme.colors.white};

  border: 1px solid rgba(200, 155, 90, 0.28);
  border-radius: 34px;

  box-shadow: 0 24px 60px rgba(62, 58, 53, 0.08);
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.72rem;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  font-size: clamp(3.5rem, 8vw, 6rem);
  line-height: 0.9;
  margin-bottom: 1.5rem;
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  max-width: 320px;
  margin: 0 auto 2rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(200, 155, 90, 0.45);
  }

  span {
    color: ${theme.colors.gold};
    font-size: 1.2rem;
  }
`

export const Message = styled.p`
  max-width: 460px;
  margin: 0 auto 1rem;
  font-size: 1rem;
`

export const Note = styled.p`
  max-width: 480px;
  margin: 0 auto;
  color: ${theme.colors.fuchsia};
  font-weight: 500;
`
