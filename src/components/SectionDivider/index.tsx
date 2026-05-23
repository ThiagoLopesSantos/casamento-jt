import * as S from './styles'

type Props = {
  title: string
  subtitle?: string
}

const SectionDivider = ({ title, subtitle }: Props) => {
  return (
    <S.DividerContainer>
      <S.Line />

      <S.Content>
        {subtitle && (
          <S.Subtitle>
            {subtitle}
          </S.Subtitle>
        )}

        <S.Title>{title}</S.Title>
      </S.Content>

      <S.Line />
    </S.DividerContainer>
  )
}

export default SectionDivider
