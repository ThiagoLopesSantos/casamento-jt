import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeroContainer = styled.section`
  width: 100%;
  background: ${theme.colors.background};
`

export const Banner = styled.div`
  width: 100%;
  height: 42vh;

  background-image: url('/hero-tropical2.png');
  background-size: cover;
  background-position: center 45%;

  @media (max-width: 768px) {
    height: 42vh;
    margin-top: 68px;
  }
`

export const Content = styled.div`
  text-align: center;
  padding: 1rem 0;
  max-width: 900px;
  margin: 0 auto;
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Names = styled.h1`
  font-family: ${theme.fonts.cursive};
  color: ${theme.colors.primaryGreen};
  font-size: clamp(4rem, 1vw, 0rem);
  font-weight: 500;
  line-height: 1.2;

  span {
    color: ${theme.colors.gold};
    font-style: italic;
  }
`

export const Date = styled.p`
  margin-top: 1rem;
  color: ${theme.colors.gold};
  letter-spacing: 6px;
  font-size: 0.95rem;
  text-transform: uppercase;
`

export const Description = styled.p`
  max-width: 520px;
  margin: 0rem auto 2rem;
  color: ${theme.colors.mutedText};
`

export const Button = styled.a`
  display: inline-block;
  background: ${theme.colors.fuchsia};
  color: ${theme.colors.white};
  padding: 14px 34px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(184, 50, 93, 0.25);
  }
`
