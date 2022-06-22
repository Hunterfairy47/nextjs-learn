import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  // Component : Page match with url
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
