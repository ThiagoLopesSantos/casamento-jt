import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`
export const DividerImage = styled.img`
  max-width: 50px;
  max-height: 50px;
`

export const Line = styled.div`
  width: 40%;
  height: 0.1px;
  background: ${theme.colors.secondaryGreen};
`
