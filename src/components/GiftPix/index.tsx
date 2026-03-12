import { QRCodeSVG } from 'qrcode.react'
import * as S from './styles'

const GiftPix = () => {
  // Dados do seu Pix
  const pixKey = 'suachavepix@email.com' // Substitua pela sua chave
  const merchantName = 'Thiago e Jessica'
  const city = 'RIO DE JANEIRO'

  // Payload simplificado (Para um gerador completo de Pix estático,
  // o ideal é usar uma lib de payload, mas aqui vamos gerar o QR com a chave)
  const pixPayload = `00020126330014BR.GOV.BCB.PIX0111${pixKey}5204000053039865802BR5915${merchantName}6009${city}62070503***6304`

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
