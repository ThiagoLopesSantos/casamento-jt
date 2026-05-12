import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const GalleryContainer = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
`

export const Title = styled.h2`
  color: ${theme.colors.primaryGreen};
  margin-bottom: 1rem;
  font-size: 2.3rem;
`

export const Subtitle = styled.p`
  color: #777;
  margin-bottom: 3rem;
  font-size: 1rem;
`

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 220px;
  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
`

export const PhotoCard = styled.div<{ $wide?: boolean; $tall?: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;

  grid-column: ${({ $wide }) => $wide ? 'span 2' : 'span 1'};
  grid-row:    ${({ $tall }) => $tall ? 'span 2' : 'span 1'};

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16);
  }

  &:hover img {
    transform: scale(1.07);
  }

  &:hover > div {
    opacity: 1;
  }
`

export const PhotoItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
`

export const PhotoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.10) 60%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  span {
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }
`

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 2rem;
`

export const ModalClose = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
`

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }
`
