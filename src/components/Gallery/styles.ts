import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const GalleryContainer = styled.section`
  width: 100%;
  padding: 2rem 2rem 6rem;
  background: ${theme.colors.background};

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 5rem;
  }
`

export const Header = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 2.5rem;
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.72rem;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.95;
  margin-bottom: 1.3rem;
`

export const Subtitle = styled.p`
  color: ${theme.colors.mutedText};
  font-size: 0.95rem;
`

export const Album = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
`

export const MainPhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(360px, 58vh, 560px);
  overflow: hidden;
  background: ${theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BlurBackground = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  filter: blur(26px);
  transform: scale(1.14);
  opacity: 0.38;
`

export const MainPhoto = styled.img`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 100%;

  object-fit: contain;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;
  margin: 1.5rem 0 1.2rem;
`

export const ArrowButton = styled.button`
  width: 42px;
  height: 42px;

  border-radius: 50%;

  background: transparent;
  color: ${theme.colors.primaryGreen};

  border: 1px solid rgba(200, 155, 90, 0.45);

  font-size: 1.1rem;

  transition: 0.3s ease;

  &:hover {
    background: ${theme.colors.fuchsia};
    color: ${theme.colors.white};
    border-color: ${theme.colors.fuchsia};
  }
`

export const Counter = styled.span`
  color: ${theme.colors.gold};
  font-size: 0.78rem;
  letter-spacing: 4px;
  font-weight: 600;
`

export const ThumbnailList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.65rem;

  overflow-x: auto;

  padding: 0.5rem 0.2rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(200, 155, 90, 0.45);
    border-radius: 999px;
  }
`

export const ThumbnailButton = styled.button<{ $active?: boolean }>`
  flex: 0 0 68px;
  height: 68px;

  padding: 0;
  border-radius: 2px;
  overflow: hidden;
  background: transparent;

  border: 1px solid
    ${({ $active }) =>
      $active ? theme.colors.fuchsia : 'rgba(200, 155, 90, 0.3)'};

  opacity: ${({ $active }) => ($active ? 1 : 0.52)};
  transition: 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    flex-basis: 58px;
    height: 58px;
  }
`
