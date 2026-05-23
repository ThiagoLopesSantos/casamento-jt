import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const GalleryContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0rem 2rem;
`

export const Header = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;
`

export const SmallText = styled.p`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.72rem;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 0.95;
  margin-bottom: 1.5rem;
`

export const Subtitle = styled.p`
  color: ${theme.colors.mutedText};
  font-size: 1rem;
`

export const Album = styled.div`
  background: ${theme.colors.white};
  border: 1px solid rgba(200, 155, 90, 0.22);
  border-radius: 34px;
  padding: 1.4rem;
  box-shadow: 0 24px 60px rgba(62, 58, 53, 0.08);

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 1rem;
  }
`

export const MainPhotoWrapper = styled.div`
  width: 100%;
  height: 620px;
  border-radius: 26px;
  overflow: hidden;
  background: ${theme.colors.softPink};

  @media (max-width: 900px) {
    height: 520px;
  }

  @media (max-width: 600px) {
    height: 380px;
    border-radius: 18px;
  }
`

export const MainPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition:
    opacity 0.8s ease,
    transform 1.2s ease;

  animation: smoothZoom 3s ease-in-out forwards;

  @keyframes smoothZoom {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.04);
    }
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  margin: 1.5rem 0;
`

export const ArrowButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: ${theme.colors.background};
  color: ${theme.colors.primaryGreen};
  border: 1px solid rgba(200, 155, 90, 0.35);
  font-size: 1.2rem;
  transition: 0.3s ease;

  &:hover {
    background: ${theme.colors.fuchsia};
    color: ${theme.colors.white};
    transform: translateY(-2px);
  }
`

export const Counter = styled.span`
  color: ${theme.colors.gold};
  font-size: 0.8rem;
  letter-spacing: 4px;
  font-weight: 600;
`

export const ThumbnailList = styled.div`
  display: flex;
  gap: 0.8rem;
  overflow-x: auto;
  padding: 0.4rem 0.2rem 0.2rem;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(200, 155, 90, 0.45);
    border-radius: 999px;
  }
`

export const ThumbnailButton = styled.button<{ $active?: boolean }>`
  flex: 0 0 88px;
  height: 88px;
  padding: 0;
  border-radius: 18px;
  overflow: hidden;
  background: transparent;
  border: 2px solid
    ${({ $active }) =>
      $active ? theme.colors.fuchsia : 'rgba(200, 155, 90, 0.25)'};
  opacity: ${({ $active }) => ($active ? 1 : 0.62)};
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
    flex-basis: 70px;
    height: 70px;
    border-radius: 14px;
  }
`
