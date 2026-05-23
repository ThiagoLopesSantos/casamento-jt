import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const MusicButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1001;

  background: rgba(250, 248, 243, 0.92);
  color: ${theme.colors.primaryGreen};

  border: 1px solid rgba(200, 155, 90, 0.35);
  border-radius: 999px;

  padding: 12px 18px;

  font-size: 0.85rem;
  font-weight: 600;

  box-shadow: 0 12px 28px rgba(62, 58, 53, 0.12);
  backdrop-filter: blur(10px);

  transition: 0.3s ease;

  &:hover {
    color: ${theme.colors.fuchsia};
    transform: translateY(-2px);
  }
`
