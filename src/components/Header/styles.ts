import styled from 'styled-components'
import { theme } from '../../styles/theme'

type HeaderProps = {
  $scrolled: boolean
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  z-index: 999;

  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(250, 248, 243, 0.92)' : 'rgba(250, 248, 243, 0.1)'};

  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? '12px' : '1px')});

  border-bottom: ${({ $scrolled }) =>
    $scrolled ? `1px solid rgba(184, 50, 93, 0.18)` : '1px solid transparent'};

  transform: ${({ $scrolled }) =>
    $scrolled ? 'translateY(0)' : 'translateY(-72%)'};

  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    transform 0.4s ease,
    border 0.4s ease;

  &:hover {
    transform: translateY(0);
    background: rgba(250, 248, 243, 0.88);
    backdrop-filter: blur(10px);
  }
`

export const Nav = styled.nav`
  max-width: 1440px;

  margin: 0 auto;

  padding: 0.2rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    justify-content: space-between;
  }
`

export const LogoImage = styled.img`
  width: 50px;
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;

  list-style: none;

  a {
    position: relative;

    font-size: 0.7rem;

    letter-spacing: 3px;

    text-transform: uppercase;

    color: ${theme.colors.text};

    transition: 0.3s ease;

    &:hover {
      color: ${theme.colors.fuchsia};
    }

    &::after {
      content: '';

      position: absolute;

      left: 0;
      bottom: -8px;

      width: 0%;

      height: 1px;

      background: ${theme.colors.fuchsia};

      transition: 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
