import * as S from './styles'

type Props = {
  title: string
  subtitle?: string
}

const SectionDivider = ({ title, subtitle }: Props) => {
  return (
    <S.DividerContainer className="reveal">
      <S.Line />

      <S.Center>
        <S.Leaf>❧</S.Leaf>

        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}

        <S.Title>{title}</S.Title>
      </S.Center>

      <S.Line />
    </S.DividerContainer>
  )
}

export default SectionDivider
