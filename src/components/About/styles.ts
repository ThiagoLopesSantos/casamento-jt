import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 0rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 4rem 1.5rem;
  }
`

export const TextContent = styled.div`
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
  }
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  font-size: clamp(2.7rem, 5vw, 4.8rem);
  line-height: 1;
  margin-bottom: 2rem;
`

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.2rem;
`

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 220px 220px 12px 12px;
  overflow: hidden;
  min-height: 60px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);

  &::after {
    content: '';
    position: absolute;
    inset: 18px;
    border: 1px solid rgba(200, 155, 90, 0.55);
    border-radius: 200px 200px 8px 8px;
    pointer-events: none;
  }

  @media (max-width: 900px) {
    min-height: 420px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
`
