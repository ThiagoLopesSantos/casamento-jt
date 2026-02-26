import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const HeroImage = styled.img`
  max-width: 800px;
  width: 100%;
  height: 300px;
  object-fit: cover;
`

export const Title = styled.h1`
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.primaryGreen};
`

export const Date = styled.p`
  font-family: serif;
  font-size: ${theme.fontSizes.large};
`

export const BtnConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 40px;
`

export const ConfirmButton = styled.button`
  background-color: ${theme.colors.primaryGreen};
  color: ${theme.colors.white};
  max-width: 220px;
  width: 100%;
  padding: 12px 40px;
  border-radius: 50px;
  font-weight: bold;
`

export const Line = styled.div`
  width: 40%;
  height: 0.1px;
  background: ${theme.colors.secondaryGreen};
`
