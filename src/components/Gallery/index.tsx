import { useEffect, useState } from 'react'
import * as S from './styles'

// Importa automaticamente todas as imagens da pasta gallery
const images = import.meta.glob(
  '../../assets/images/gallery/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)

const photos = Object.values(images)

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
          Nosso olhar e nosso sorriso contam uma história de um passado, um
          presente e um futuro cheio de amor que está por vir.
        </S.Subtitle>
      </S.Header>

      <S.Album>
        <S.MainPhotoWrapper>
          <S.BlurBackground src={photos[activeIndex]} alt="" />

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
