import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  margin: 7rem 0 4rem;

  padding: 0 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

export const Line = styled.div`
  flex: 1;
  max-width: 180px;
  height: 1px;

  background: linear-gradient(
    to right,
    transparent,
    ${theme.colors.gold},
    transparent
  );
`

export const Content = styled.div`
  text-align: center;
`

export const Subtitle = styled.p`
  color: ${theme.colors.gold};

  text-transform: uppercase;

  letter-spacing: 4px;

  font-size: 0.72rem;

  margin-bottom: 0.8rem;
`

export const Title = styled.h2`
  font-family: ${theme.fonts.title};

  font-size: clamp(2.5rem, 5vw, 4rem);

  color: ${theme.colors.primaryGreen};

  font-weight: 500;
`
