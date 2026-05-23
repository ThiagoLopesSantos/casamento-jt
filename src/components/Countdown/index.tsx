import { useEffect, useState } from 'react'
import * as S from './styles'

const WEDDING_DATE = new Date('2026-11-28T14:30:00')

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const difference = WEDDING_DATE.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }

    updateCountdown()

    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <S.CountdownContainer className="reveal" id="countdown">
      <S.SmallText>Save the date</S.SmallText>

      <S.Title>Faltam</S.Title>

      <S.TimerGrid>
        <S.TimeBox>
          <strong>{timeLeft.days}</strong>
          <span>Dias</span>
        </S.TimeBox>

        <S.TimeBox>
          <strong>{timeLeft.hours}</strong>
          <span>Horas</span>
        </S.TimeBox>

        <S.TimeBox>
          <strong>{timeLeft.minutes}</strong>
          <span>Min</span>
        </S.TimeBox>

        <S.TimeBox>
          <strong>{timeLeft.seconds}</strong>
          <span>Seg</span>
        </S.TimeBox>
      </S.TimerGrid>

      <S.Message>
        Para o nosso sim, no dia 28 de novembro de 2026 💚
      </S.Message>
    </S.CountdownContainer>
  )
}

export default Countdown
