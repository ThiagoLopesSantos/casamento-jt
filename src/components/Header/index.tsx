import { useEffect, useState } from 'react'
import * as S from './styles'

import logo from '../../assets/images/icons/monograma3.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <S.HeaderContainer $scrolled={scrolled}>
      <S.Nav>
        <a href="#inicio">
          <S.LogoImage src={logo} alt="Logo JT" />
        </a>

        <S.NavLinks>
          <li>
            <a href="#inicio">Início</a>
          </li>

          <li>
            <a href="#sobre">Sobre Nós</a>
          </li>

          <li>
            <a href="#cerimonia">Cerimônia & Recepção</a>
          </li>

          <li>
            <a href="#galeria">Lista de Presentes</a>
          </li>

          <li>
            <a href="#rsvp">Confirmação</a>
          </li>
        </S.NavLinks>
      </S.Nav>
    </S.HeaderContainer>
  )
}

export default Header
