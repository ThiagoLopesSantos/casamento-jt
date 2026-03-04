import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
`

export const InfoGroup = styled.div`
  width: 100%;

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.5rem;
  }
`

export const BtnRouteContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RouteButton = styled.button`
  background-color: ${theme.colors.primaryGreen};
  color: white;
  width: 40%;
  padding: 5px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 1.5rem auto;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
  }

  &:hover {
    background-color: ${theme.colors.hoverGreen};
  }
`
export const Line = styled.div`
  width: 30%;
  height: 0.1px;
  background: ${theme.colors.secondaryGreen};
`
export const GuideItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 70px;
    align-self: center;
  }

  #dress {
    width: 150px;
  }

  div {
    strong {
      display: block;
      color: #333;
    }
    p {
      font-size: 0.85rem;
      color: #666;
    }
  }
`
