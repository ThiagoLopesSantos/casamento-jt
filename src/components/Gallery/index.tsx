import * as S from './styles'
import photo1 from '../../assets/images/thiagoEjess.jpg'
import photo2 from '../../assets/images/thiagoEjess.jpg'
import photo3 from '../../assets/images/thiagoEjess.jpg'
import photo4 from '../../assets/images/thiagoEjess.jpg'
// ... importe as outras fotos

const Gallery = () => {
  const photos = [photo1, photo2, photo3, photo4]; // array de fotos

  return (
    <S.GalleryContainer>
      <S.Title>Nossos Momentos</S.Title>
      <S.PhotoGrid>
        {photos.map((photo, index) => (
          <S.PhotoItem key={index} src={photo} alt={`Pre-wedding ${index + 1}`} />
        ))}
      </S.PhotoGrid>
    </S.GalleryContainer>
  )
}

export default Gallery
