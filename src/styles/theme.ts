// export const theme = {
//     colors: {
//         background: '#F8F6F2',
//         primaryGreen: '#6F7D5C',
//         secondaryGreen: '#bfc9b3',
//         hoverGreen:  '#7c8570',
//         white: '#fff'
//     },
//     fonts: {
//         title: "'Playfair Display', serif",
//         body: "'Cormorant Garamond', sans-serif",
//     },
//     fontSizes: {
//       small: '0.875rem',  // 14px
//       medium: '1rem',     // 16px
//       large: '1.25rem',   // 20px
//       title: '2.25rem',   // 40px (Para os nomes do casal)
//       subtitle: '1.5rem', // 24px
//     },
//     container: {
//       maxWidth: '800px',
//     },
// };

// Criando um tipo para o TS entender o tema

export const theme = {
  colors: {
    background: '#FAF8F3',

    primaryGreen: '#5F6B4A',
    secondaryGreen: '#A9B28A',

    gold: '#C89B5A',
    white: '#FFFFFF',
    fuchsia: '#B8325D',
    softPink: '#F7E9E8',

    text: '#3E3A35',
    mutedText: '#6F6A62'
  },

  fonts: {
    title: "'Cormorant Garamond', serif",
    body: "'Montserrat', sans-serif",
    script: "'Great Vibes', cursive",
    cursive: "'Rouge Script', cursive"
  }
}

export type ThemeType = typeof theme;



