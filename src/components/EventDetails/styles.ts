import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 440px;
`

export const IconWrapper = styled.div`
  width: 78px;
  height: 78px;

  border: 1px solid rgba(200, 155, 90, 0.35);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.8rem;

  span {
    color: ${theme.colors.gold};
    font-size: 1.7rem;
  }
`

export const SectionLabel = styled.h2`
  font-size: 2rem;
  letter-spacing: 2px;
  color: ${theme.colors.primaryGreen};

  margin-bottom: 1rem;
`

export const Line = styled.div`
  width: 42px;
  height: 1px;

  background: rgba(200, 155, 90, 0.45);

  margin-bottom: 2rem;
`

export const Place = styled.p`
  color: ${theme.colors.mutedText};
  margin-bottom: 0.4rem;
`

export const Time = styled.p`
  color: ${theme.colors.fuchsia};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 1.4rem;
`

export const Address = styled.p`
  color: ${theme.colors.mutedText};
  line-height: 1.8;
  margin-bottom: 1.6rem;
`

export const InputRota = styled.input`
  width: 100%;
  max-width: 360px;

  padding: 14px 18px;
  margin-bottom: 1rem;

  border: 1px solid rgba(95, 107, 74, 0.35);
  border-radius: 999px;

  background: transparent;

  outline: none;

  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};

  text-align: center;

  &:focus {
    border-color: ${theme.colors.fuchsia};
    box-shadow: 0 0 0 3px rgba(184, 50, 93, 0.1);
  }
`

export const RouteButton = styled.button`
  background: ${theme.colors.fuchsia};
  color: white;

  padding: 14px 38px;

  border-radius: 4px;

  font-size: 0.78rem;

  letter-spacing: 2px;

  text-transform: uppercase;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  margin-bottom: 1.5rem;

  transition: 0.3s ease;

  img {
    width: 17px;
    filter: brightness(0) invert(1);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(184, 50, 93, 0.22);
  }
`

export const LinkInstagram = styled.div`
  a {
    color: ${theme.colors.primaryGreen};
    font-size: 0.86rem;
    border-bottom: 1px solid rgba(200, 155, 90, 0.6);
    padding-bottom: 4px;
    transition: 0.3s ease;

    &:hover {
      color: ${theme.colors.fuchsia};
      border-color: ${theme.colors.fuchsia};
    }
  }
`
