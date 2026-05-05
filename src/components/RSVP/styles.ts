import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/theme'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`

export const RSVPContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Title = styled.h2`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.primaryGreen};
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: #666;
  max-width: 450px;
  margin-bottom: 2rem;
  line-height: 1.6;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 15px 25px;
  border-radius: 50px;
  border: 2px solid ${theme.colors.secondaryGreen};
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: ${theme.colors.primaryGreen};
  }
`

export const ResultList = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ResultItem = styled.div<{ $active?: boolean }>`
  padding: 15px;
  background: ${(props) =>
    props.$active ? theme.colors.primaryGreen : 'white'};
  color: ${(props) => (props.$active ? 'white' : theme.colors.primaryGreen)};
  border: 1px solid ${theme.colors.secondaryGreen};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateX(5px);
    background: #f0f4eb;
    color: ${theme.colors.primaryGreen};
  }
`

export const StepBox = styled.div`
  animation: ${fadeIn} 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 1.5rem 0;
  width: 100%;
  max-width: 350px;
`

export const ValueCard = styled.div<{ $active?: boolean }>`
  padding: 15px;
  border: 2px solid
    ${(props) => (props.$active ? theme.colors.primaryGreen : '#eee')};
  background: ${(props) => (props.$active ? '#f0f4eb' : 'white')};
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  color: ${theme.colors.primaryGreen};
  transition: all 0.2s;
`

export const QRBox = styled.div`
  background: white;
  padding: 15px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
`

export const CopyButton = styled.button`
  background: #f8f9fa;
  border: 1px dashed ${theme.colors.primaryGreen};
  padding: 8px 15px;
  border-radius: 8px;
  color: ${theme.colors.primaryGreen};
  cursor: pointer;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
`

export const SubmitButton = styled.button`
  background: ${theme.colors.primaryGreen};
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  max-width: 350px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  .jump-link {
    background: ${theme.colors.secondaryGreen};
    border: none;
    padding: 12px 30px;
    color: #888;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const SuccessBox = styled.div`
  animation: ${fadeIn} 0.6s ease;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  border: 1px solid ${theme.colors.secondaryGreen};
  max-width: 400px;
`
