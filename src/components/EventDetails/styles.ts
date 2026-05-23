import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const DetailsContainer = styled.section`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 5rem 2rem 7rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 4rem 1.5rem;
  }
`

export const Card = styled.div`
  position: relative;
  background: ${theme.colors.white};
  border: 1px solid rgba(200, 155, 90, 0.25);
  padding: 3rem;
  border-radius: 28px;
  box-shadow: 0 20px 45px rgba(62, 58, 53, 0.06);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;
    width: 190px;
    height: 190px;
    background: ${theme.colors.softPink};
    border-radius: 50%;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const SmallText = styled.p`
  position: relative;
  z-index: 1;
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.72rem;
  margin-bottom: 0.9rem;
`

export const Title = styled.h2`
  position: relative;
  z-index: 1;
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 0.95;
  margin-bottom: 2rem;
`

export const PlaceName = styled.h3`
  position: relative;
  z-index: 1;
  color: ${theme.colors.fuchsia};
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`

export const Address = styled.p`
  position: relative;
  z-index: 1;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

export const LinkInstagram = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;

  a {
    display: inline-block;
    color: ${theme.colors.primaryGreen};
    font-weight: 600;
    border-bottom: 1px solid ${theme.colors.gold};
    padding-bottom: 4px;
    transition: 0.3s ease;

    &:hover {
      color: ${theme.colors.fuchsia};
      border-color: ${theme.colors.fuchsia};
    }
  }
`

export const RouteBox = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.8rem;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const InputRota = styled.input`
  flex: 1;
  width: 100%;
  padding: 14px 18px;
  border-radius: 999px;
  border: 1px solid rgba(95, 107, 74, 0.25);
  background: ${theme.colors.background};
  outline: none;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};

  &:focus {
    border-color: ${theme.colors.fuchsia};
    box-shadow: 0 0 0 3px rgba(184, 50, 93, 0.1);
  }
`

export const RouteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  background: ${theme.colors.fuchsia};
  color: ${theme.colors.white};
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: 600;
  white-space: nowrap;
  transition: 0.3s ease;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(184, 50, 93, 0.22);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const GuideList = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

export const GuideItem = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 1rem;
  align-items: flex-start;

  strong {
    display: block;
    color: ${theme.colors.primaryGreen};
    font-size: 1rem;
    margin-bottom: 0.4rem;
    text-transform: uppercase;
    letter-spacing: 1.4px;
  }

  p {
    font-size: 0.95rem;
  }
`

export const IconCircle = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${theme.colors.softPink};
  border: 1px solid rgba(200, 155, 90, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
`
