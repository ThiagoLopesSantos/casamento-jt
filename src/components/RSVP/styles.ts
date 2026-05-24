import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/theme'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`

export const RSVPContainer = styled.section`
  width: 100%;
  padding: 5rem 2rem 7rem;
  background: ${theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .jump-link {
    background: transparent;
    color: ${theme.colors.primaryGreen};
    text-decoration: underline;
    font-size: 0.85rem;
    padding: 0.8rem;
    transition: 0.3s ease;

    &:hover {
      color: ${theme.colors.fuchsia};
    }
  }
`

export const StepBox = styled.div`
  animation: ${fadeIn} 0.45s ease;
  width: 100%;
  max-width: 620px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 2rem 1rem;
`

export const Title = styled.h2`
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 0.9;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  max-width: 450px;
  color: ${theme.colors.mutedText};
  line-height: 1.8;
  margin-bottom: 1.5rem;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 390px;

  padding: 15px 18px;
  margin-bottom: 0.8rem;

  border-radius: 999px;
  border: 1px solid rgba(200, 155, 90, 0.35);

  background: ${theme.colors.background};
  color: ${theme.colors.text};

  text-align: center;
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;

  outline: none;
  transition: 0.25s ease;

  &::placeholder {
    color: rgba(62, 58, 53, 0.45);
  }

  &:focus {
    border-color: ${theme.colors.fuchsia};
    box-shadow: 0 0 0 3px rgba(184, 50, 93, 0.1);
  }
`

export const SubmitButton = styled.button`
  background: ${theme.colors.fuchsia};
  color: ${theme.colors.white};

  padding: 15px 34px;
  border-radius: 4px;

  width: 100%;
  max-width: 360px;

  font-size: 0.78rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(184, 50, 93, 0.24);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
`

export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9rem;

  width: 100%;
  max-width: 360px;

  margin: 1rem 0;
`

export const ValueCard = styled.div<{ $active?: boolean }>`
  padding: 1rem;

  border-radius: 18px;

  cursor: pointer;

  font-weight: 600;

  color: ${({ $active }) =>
    $active ? theme.colors.white : theme.colors.primaryGreen};

  background: ${({ $active }) =>
    $active ? theme.colors.primaryGreen : theme.colors.background};

  border: 1px solid
    ${({ $active }) =>
      $active ? theme.colors.primaryGreen : 'rgba(200, 155, 90, 0.25)'};

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${theme.colors.fuchsia};
  }
`

export const QRBox = styled.div`
  background: ${theme.colors.white};

  padding: 1rem;

  border-radius: 24px;

  border: 1px solid rgba(200, 155, 90, 0.25);

  box-shadow: 0 14px 35px rgba(62, 58, 53, 0.08);
`

export const CopyButton = styled.button`
  background: ${theme.colors.background};

  border: 1px dashed ${theme.colors.gold};

  padding: 10px 18px;

  border-radius: 999px;

  color: ${theme.colors.primaryGreen};

  font-size: 0.85rem;

  transition: 0.25s ease;

  &:hover {
    color: ${theme.colors.fuchsia};
    border-color: ${theme.colors.fuchsia};
  }
`

export const SuccessBox = styled.div`
  animation: ${fadeIn} 0.5s ease;

  width: 100%;
  max-width: 560px;

  padding: 4rem 2rem;

  background: ${theme.colors.white};

  border-radius: 34px;

  border: 1px solid rgba(200, 155, 90, 0.28);

  box-shadow: 0 24px 60px rgba(62, 58, 53, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  h3 {
    font-family: ${theme.fonts.title};
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1;
    color: ${theme.colors.primaryGreen};
  }

  p {
    max-width: 440px;
    color: ${theme.colors.mutedText};
    line-height: 1.8;
  }
`

export const ResultList = styled.div`
  display: none;
`

export const ResultItem = styled.div<{ $active?: boolean }>``
