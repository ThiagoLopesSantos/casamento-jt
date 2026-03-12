import ContentSection from '../../components/ContentSection';
import Gallery from '../../components/Gallery';
import GiftPix from '../../components/GiftPix';
import Hero from '../../components/Hero';
import SectionDivider from '../../components/SectionDivider';

const Home = () => {
  return (
    <>
      <Hero />
      <SectionDivider />
      <ContentSection />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <GiftPix />
    </>
  );
};

export default Home
