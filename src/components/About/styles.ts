import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 420px;
`

export const IconWrapper = styled.div`
  width: 78px;
  height: 78px;

  border: 1px solid rgba(200, 155, 90, 0.35);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.8rem;

  span {
    color: ${theme.colors.gold};
    font-size: 1.7rem;
  }
`

export const SectionLabel = styled.h2`
  font-size: 2rem;
  letter-spacing: 2px;
  color: ${theme.colors.primaryGreen};

  margin-bottom: 1rem;
`

export const Line = styled.div`
  width: 42px;
  height: 1px;

  background: rgba(200, 155, 90, 0.45);

  margin-bottom: 2rem;
`

export const Text = styled.p`
  color: ${theme.colors.mutedText};

  line-height: 2;

  font-size: 0.95rem;

  margin-bottom: 2.5rem;
`

export const Button = styled.a`
  border: 1px solid rgba(95, 107, 74, 0.45);

  padding: 14px 34px;

  border-radius: 2px;

  font-size: 0.78rem;

  letter-spacing: 2px;

  text-transform: uppercase;

  color: ${theme.colors.primaryGreen};

  transition: 0.3s ease;

  &:hover {
    background: ${theme.colors.fuchsia};
    border-color: ${theme.colors.fuchsia};
    color: white;
  }
`
