import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const DividerContainer = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 5rem auto 3rem;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1.5rem;
`

export const Line = styled.div`
  height: 1px;
  background: rgba(200, 155, 90, 0.45);
`

export const Center = styled.div`
  text-align: center;
  min-width: 220px;
`

export const Leaf = styled.div`
  color: ${theme.colors.gold};
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
`

export const Subtitle = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.68rem;
  margin-bottom: 0.5rem;
`

export const Title = styled.h2`
  font-size: clamp(2.3rem, 5vw, 4rem);
  line-height: 1;
  color: ${theme.colors.primaryGreen};
`
