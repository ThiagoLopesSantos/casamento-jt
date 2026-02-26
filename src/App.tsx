import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyles'
import { MainContainer } from './styles/GlobalStyles'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Home></Home>
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
