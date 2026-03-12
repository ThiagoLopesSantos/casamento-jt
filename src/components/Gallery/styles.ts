import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const GalleryContainer = styled.section`
  padding: 2rem;
  text-align: center;
`

export const Title = styled.h2`
  color: ${theme.colors.primaryGreen};
  margin-bottom: 2rem;
`

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`

export const PhotoItem = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`
