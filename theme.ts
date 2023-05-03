import { ChakraTheme, extendTheme } from '@chakra-ui/react'
import '@fontsource/outfit'
import '@fontsource/outfit/100.css'
import '@fontsource/outfit/200.css'
import '@fontsource/outfit/300.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/700.css'
import '@fontsource/outfit/800.css'
import '@fontsource/outfit/900.css'

const custom: Partial<ChakraTheme> = {
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Outfit', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'none',
      },
    },
  },
  colors: {
    gray: {
      50: '#F5F5F5',
      100: '#EEEEEE',
      200: '#E0E0E0',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#212121',
      900: '#111111',
    },
  },
  styles: {
    global: {
      '*, *::before, &::after': {
        '-webkit-tap-highlight-color': 'transparent',
      },
    },
  },
}

export const theme = extendTheme(custom)
