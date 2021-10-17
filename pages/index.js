import Head from 'next/head'
import App from '../stuff/App'
import styles from '../styles/Home.module.css'
import { init } from 'emailjs-com';
init("user_fNzCzFsGtx3gCQ0ErLfZp");

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopher Chifor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App />

    </div>
  )
}
