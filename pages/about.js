import Head from 'next/head'
import AboutPage from '../stuff/components/AboutPage'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
      <div className={styles.container}>
        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <AboutPage />
      </div>
    )
  }