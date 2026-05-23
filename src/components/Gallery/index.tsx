import { useEffect, useState } from 'react'
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

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9
]

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length)
  }

  const previousPhoto = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <S.GalleryContainer id="galeria" className="reveal">
      <S.Header>
        <S.SmallText>Memórias</S.SmallText>
        <S.Title>Nossos Momentos</S.Title>
        <S.Subtitle>
          Nosso olhar e nosso sorriso contam uma história de uma passado, um presente e um futuro cheio de amor que esta por vir. 
        </S.Subtitle>
      </S.Header>

      <S.Album>
        <S.MainPhotoWrapper>
          <S.MainPhoto
            src={photos[activeIndex]}
            alt={`Momento ${activeIndex + 1}`}
          />
        </S.MainPhotoWrapper>

        <S.Controls>
          <S.ArrowButton onClick={previousPhoto}>←</S.ArrowButton>

          <S.Counter>
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(photos.length).padStart(2, '0')}
          </S.Counter>

          <S.ArrowButton onClick={nextPhoto}>→</S.ArrowButton>
        </S.Controls>

        <S.ThumbnailList>
          {photos.map((photo, index) => (
            <S.ThumbnailButton
              key={index}
              $active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <img src={photo} alt={`Miniatura ${index + 1}`} />
            </S.ThumbnailButton>
          ))}
        </S.ThumbnailList>
      </S.Album>
    </S.GalleryContainer>
  )
}

export default Gallery
