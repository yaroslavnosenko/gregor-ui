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
}

export const theme = extendTheme(custom)
