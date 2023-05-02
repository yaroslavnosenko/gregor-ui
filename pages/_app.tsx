import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { baseTheme } from '@/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themes={[baseTheme]} themeType="base">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
