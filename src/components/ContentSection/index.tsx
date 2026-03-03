import About from '../About';
import EventDetails from '../EventDetails';
import * as S from './styles';

const ContentSection = () => {
  return (
    <S.GridContainer>
      {/* Coluna da Esquerda */}
      <S.Column>
        <About />
      </S.Column>

      {/* Coluna da Direita (com a borda divisória) */}
      <S.Column>
        <EventDetails />
      </S.Column>
    </S.GridContainer>
  );
};

export default ContentSection;
