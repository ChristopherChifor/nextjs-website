import Head from 'next/head'
import { AppProps } from 'next/app'
import 'styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chris Chifor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Personal site of Chris Chifor, a software engineer based in Toronto, Canada."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp