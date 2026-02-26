import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.primaryGreen};
    color: ${theme.colors.primaryGreen};
    font-family: ${theme.fonts.body};
  }

  h1, h2, h3 {
    font-family: ${theme.fonts.title};
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: ${theme.colors.primaryGreen};
  }

`
export const MainContainer = styled.div`
  max-width: ${theme.container.maxWidth};
  margin: 0 auto; // Centralizando o conteúdo
  background-color: ${theme.colors.background};
  min-height: 100vh;
`


