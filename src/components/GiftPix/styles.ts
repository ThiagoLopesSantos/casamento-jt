import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const PixSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  text-align: center;
`

export const Title = styled.h2`
  font-size: ${theme.fontSizes.subtitle};
  color: ${theme.colors.primaryGreen};
  margin-bottom: 1rem;
`

export const QRContainer = styled.div`
  background: white;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid ${theme.colors.secondaryGreen};
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CopyButton = styled.button`
  background-color: ${theme.colors.primaryGreen};
  color: ${theme.colors.white};
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.hoverGreen};
  }
`
