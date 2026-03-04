import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  justify-content: center;
  border-right: 1px solid ${theme.colors.secondaryGreen};
  padding: 0 2rem;
`

export const Title = styled.h2`
  font-size: ${theme.fontSizes.subtitle};
  color: ${theme.colors.primaryGreen};
`

export const StoryText = styled.p`
  font-size: ${theme.fontSizes.medium};
  text-align: left;
  line-height: 1.6;
  color: ${theme.colors.primaryGreen};
`

export const CoupleImage = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`
