import { Themes } from '@geist-ui/core'
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

export const baseTheme = Themes.createFromLight({
  type: 'base',
  font: {
    sans: 'Outfit',
  },
})
