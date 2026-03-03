import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 2rem;
`;

export const InfoGroup = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    color: ${theme.colors.primaryGreen};
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.95rem;
  }
`;
export const BtnRouteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const RouteButton = styled.button`
  background-color: ${theme.colors.primaryGreen};
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  font-size: 0.9rem;
`;

export const GuideItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 1rem;

  img { width: 32px; } /* Para os ícones de relógio e vestido */

  div {
    strong { display: block; color: #333; }
    p { font-size: 0.85rem; color: #666; }
  }
`;
