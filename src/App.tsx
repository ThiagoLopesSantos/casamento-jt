import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyles'
import { MainContainer } from './styles/GlobalStyles'
import Home from './pages/Home'
import Header from './components/Header'
import MusicPlayer from './components/MusicPlayer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <ScrollReveal />
        <Header />
        <Home />
        <MusicPlayer />
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
