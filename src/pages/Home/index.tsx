import ContentSection from '../../components/ContentSection'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import RSVP from '../../components/RSVP'
import SectionDivider from '../../components/SectionDivider'

const Home = () => {
  return (
    <>
      <Hero />
      <SectionDivider />
      <ContentSection />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <RSVP />
    </>
  )
}

export default Home
