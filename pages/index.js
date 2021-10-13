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
      <a title="Real Time Web Analytics" href="http://clicky.com/101336900"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
      <script async src="//static.getclicky.com/101336900.js"></script>
      <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101336900ns.gif" /></p></noscript>
    </div>
  )
}
