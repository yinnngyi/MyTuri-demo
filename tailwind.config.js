module.exports = {
  content: ['./src/**/*.{html,js}', './dist/*.html'],
  theme: {
    colors: {
      white: '#fff',
      brown: '#604231',
      primary: '#094',
      primaryDark: '#14763B',
      red: 'red'
    },
    screens: {
      xxl: { max: '1440px' },
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' }
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
      },
      padding: {
        DEFAULT: '2rem',
        lg: '0rem'
      }
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1xl': '1.375rem',
      '2xl': '1.5rem',
      '2.5xl': '1.75rem',
      '3.25xl': '1.75rem',
      '3.5xl': '2rem',
      '4xl': '2.25rem',
      '4.5xl': '2.625rem'
    },
    fontFamily: {
      notosans: ['Noto Sans TC', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      '1px': '1px',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em'
    }
  },
  plugins: []
}
