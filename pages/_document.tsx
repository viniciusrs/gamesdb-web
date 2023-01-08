import { Html, Head, Main, NextScript } from 'next/document'
import { useTheme } from 'hooks/useTheme'

export default function Document() {
  useTheme();

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
