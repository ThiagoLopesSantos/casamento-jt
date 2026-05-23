import { useRef, useState } from 'react'
import * as S from './styles'

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
      return
    }

    try {
      await audioRef.current.play()
      setPlaying(true)
    } catch {
      alert('Toque novamente para iniciar a música.')
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music2.mp3" type="audio/mpeg" />
      </audio>

      <S.MusicButton onClick={toggleMusic}>
        {playing ? '⏸ Pausar música' : '♪ Nossa música'}
      </S.MusicButton>
    </>
  )
}

export default MusicPlayer
