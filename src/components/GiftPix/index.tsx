import { QRCodeSVG } from 'qrcode.react'
import * as S from './styles'

const GiftPix = () => {
  // Dados do seu Pix
  const pixKey = '15470236781' // Substitua pela sua chave

  // Payload simplificado (Para um gerador completo de Pix estático,
  // o ideal é usar uma lib de payload, mas aqui vamos gerar o QR com a chave)

  const pixPayload = `00020101021126580014br.gov.bcb.pix01364fbc930c-30b4-4d7e-93fd-52938d11fc295204000053039865802BR5915THIAGO L SANTOS6013RIO DE JANEIR62070503***63040112`

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey)
    alert('Chave Pix copiada com sucesso!')
  }

  return (
    <S.PixSection>
      <S.Title>Operação Lua de Mel</S.Title>
      <p>
        Sua presença é o nosso maior presente! Se desejar nos presentear, você
        pode usar o QR Code abaixo.
      </p>

      <S.QRContainer>
        <QRCodeSVG
          value={pixPayload}
          size={200}
          bgColor={'#ffffff'}
          fgColor={'#6F7D5C'} // Cor primaryGreen do seu tema
          level={'L'}
        />
      </S.QRContainer>

      <S.CopyButton onClick={copyPixKey}>Copiar Chave Pix</S.CopyButton>
    </S.PixSection>
  )
}

export default GiftPix
