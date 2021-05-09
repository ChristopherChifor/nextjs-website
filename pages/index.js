import Head from 'next/head'
import App from '../stuff/App'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Chifor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App/>
    </div>
  )
}
