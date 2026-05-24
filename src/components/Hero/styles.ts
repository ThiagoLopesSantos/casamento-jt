import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeroContainer = styled.section`
  width: 100%;
  background: ${theme.colors.background};
`

export const Banner = styled.div`
  width: 100%;
  height: 56vh;

  background-image: url('/hero-tropical2.png');
  background-size: cover;
  background-position: center 48%;

  @media (max-width: 768px) {
    height: 42vh;
    margin-top: 58px;
  }
`

export const Content = styled.div`
  text-align: center;
  padding: 3.5rem 1.5rem 3rem;
  max-width: 900px;
  margin: 0 auto;
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 0.78rem;
  margin-bottom: 1rem;
`

export const Names = styled.h1`
  font-family: ${theme.fonts.script};
  color: ${theme.colors.primaryGreen};
  font-size: clamp(1rem, 9vw, 7rem);
  line-height: 1;

  span {
    color: ${theme.colors.gold};
    margin: 0 0.5rem;
  }

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1.4rem auto 1.4rem;
  max-width: 460px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(200, 155, 90, 0.5);
  }

  span {
    color: ${theme.colors.gold};
    font-size: 1.2rem;
  }
`

export const Date = styled.p`
  color: ${theme.colors.fuchsia};
  letter-spacing: 8px;
  font-size: 0.95rem;
  text-transform: uppercase;

  @media (max-width: 600px) {
    letter-spacing: 4px;
    font-size: 0.8rem;
  }
`
