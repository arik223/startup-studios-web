import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      divider: 'rgba(255,84,0,0.55)',
      primary: {
        main: '#FF7222',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#EF4C48',
      },
      background: {
        default: '#ffffff',
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      h1: {
        fontSize: '3.6rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: 32,
        fontWeight: 700,
      },
      h3: {
        fontSize: 14,
      },
    },
  })
)

export default theme
