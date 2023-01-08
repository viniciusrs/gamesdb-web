import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import Navigation from 'components/navigation/navigation'


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      {/* <Navigation props={} /> */}
      <Component {...pageProps} />
    </main>
  )
}
