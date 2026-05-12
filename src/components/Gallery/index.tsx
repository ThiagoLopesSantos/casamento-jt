import { useState } from 'react'
import * as S from './styles'

import photo1 from '../../assets/images/gallery/thiagoEjess.jpg'
import photo2 from '../../assets/images/gallery/thiagoEJess1.jpg'
import photo3 from '../../assets/images/gallery/thiagoEJess2.jpg'
import photo4 from '../../assets/images/gallery/thiagoEJess7.jpg'
import photo5 from '../../assets/images/gallery/thiagoEJess4.jpg'
import photo6 from '../../assets/images/gallery/thiagoEJess5.jpg'
import photo7 from '../../assets/images/gallery/thiagoEJess6.jpg'
import photo8 from '../../assets/images/gallery/thiagoEJess3.jpg'
import photo9 from '../../assets/images/gallery/thiagoEJess8.jpg'

type PhotoConfig = { src: string; wide?: boolean; tall?: boolean }

const photos: PhotoConfig[] = [
  { src: photo1, tall: true },   // 0 — alto (destaque)
  { src: photo2 },               // 1
  { src: photo3 },               // 2
  { src: photo4, wide: true },   // 3 — largo
  { src: photo5 },               // 4
  { src: photo6 },               // 5
  { src: photo7, tall: true },   // 6 — alto
  { src: photo8 },               // 7
  { src: photo9, wide: true },   // 8 — largo (última sozinha)
]

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <>
      <S.GalleryContainer>
        <S.Title>Nossos Momentos 💚</S.Title>
        <S.Subtitle>Alguns pedacinhos da nossa história até aqui ✨</S.Subtitle>

        <S.PhotoGrid>
          {photos.map((photo, index) => (
            <S.PhotoCard
              key={index}
              $wide={photo.wide}
              $tall={photo.tall}
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <S.PhotoItem src={photo.src} alt={`Momento ${index + 1}`} />
              <S.PhotoOverlay>
                <span>💚 Ver foto</span>
              </S.PhotoOverlay>
            </S.PhotoCard>
          ))}
        </S.PhotoGrid>
      </S.GalleryContainer>

      {selectedPhoto && (
        <S.Modal onClick={() => setSelectedPhoto(null)}>
          <S.ModalClose>✕</S.ModalClose>
          <S.ModalImage src={selectedPhoto} alt="Foto ampliada" />
        </S.Modal>
      )}
    </>
  )
}

export default Gallery
