import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 2rem;

  text-align: center;

  background: linear-gradient(
    to bottom,
    rgba(247, 233, 232, 0.45),
    ${theme.colors.background}
  );

  border-top: 1px solid rgba(200, 155, 90, 0.18);
`

export const Monogram = styled.div`
  width: 150px;
  margin: 0 auto 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Names = styled.h2`
  font-family: ${theme.fonts.script};
  color: ${theme.colors.primaryGreen};
  font-size: clamp(1rem, 9vw, 7.8rem);
  line-height: 1;

  span {
    color: ${theme.colors.gold};
    margin: 0 0.5rem;
  }

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`

export const Date = styled.p`
  color: ${theme.colors.gold};
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
`

export const Message = styled.p`
  color: ${theme.colors.mutedText};

  margin-bottom: 1rem;
`

export const Location = styled.p`
  color: ${theme.colors.mutedText};

  opacity: 0.7;

  font-size: 0.85rem;
`
