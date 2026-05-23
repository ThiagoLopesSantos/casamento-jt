import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-family: ${theme.fonts.title};
    font-weight: 500;
    color: ${theme.colors.primaryGreen};
  }

  p {
    color: ${theme.colors.mutedText};
    line-height: 1.7;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: ${theme.fonts.body};
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${theme.colors.fuchsia};
    color: ${theme.colors.white};
  }

.reveal {
  opacity: 1;
  transform: none;
}

.js-reveal .reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: 0.8s ease;
}

.js-reveal .reveal.active {
  opacity: 1;
  transform: translateY(0);
}
`

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${theme.colors.background};
`
