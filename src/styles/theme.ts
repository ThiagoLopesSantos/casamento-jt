export const theme = {
    colors: {
        background: '#F8F6F2',
        primaryGreen: '#6F7D5C',
        secondaryGreen: '#bfc9b3',
        white: '#fff'
    },
    fonts: {
        title: "'Playfair Display', serif",
        body: "'Cormorant Garamond', sans-serif",
    },
    fontSizes: {
      small: '0.875rem',  // 14px
      medium: '1rem',     // 16px
      large: '1.25rem',   // 20px
      title: '2.25rem',   // 40px (Para os nomes do casal)
      subtitle: '1.5rem', // 24px
    },
    container: {
      maxWidth: '800px',
    },
};

// Criando um tipo para o TS entender o tema
export type ThemeType = typeof theme;
