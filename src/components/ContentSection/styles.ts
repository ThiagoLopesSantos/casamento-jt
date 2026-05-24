import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ContentWrapper = styled.section`
  width: 100%;
  background: ${theme.colors.background};
  padding: 1rem 2rem;
`

export const ContentGrid = styled.div`
  position: relative;
  max-width: 1180px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 4rem;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Divider = styled.div`
  position: relative;
  width: 1px;
  background: rgba(200, 155, 90, 0.35);
  min-height: 360px;

  span {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background: ${theme.colors.background};
    color: ${theme.colors.gold};

    font-size: 2rem;
    padding: 0.8rem 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 1px;
    min-height: 1px;

    span {
      padding: 0 0.8rem;
    }
  }
`
