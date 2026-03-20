import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const RSVPSection = styled.section`
  padding: 3rem 2rem;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  color: ${theme.colors.primaryGreen};
  margin-bottom: 1rem;
`

export const Description = styled.p`
  text-align: center;
  max-width: 400px;
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.95rem;
`

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;

  label {
    font-weight: bold;
    color: ${theme.colors.primaryGreen};
    font-size: 0.9rem;
  }

  input,
  select,
  textarea {
    padding: 12px;
    border: 1px solid ${theme.colors.secondaryGreen};
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: ${theme.colors.primaryGreen};
    }
  }
`

export const SubmitButton = styled.button`
  background-color: ${theme.colors.primaryGreen};
  color: white;
  padding: 15px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: ${theme.colors.hoverGreen};
  }
`
