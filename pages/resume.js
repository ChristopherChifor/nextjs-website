import Head from 'next/head'
import ResumePage from '../stuff/components/ResumePage'
import styles from '../styles/Home.module.css'

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Resume</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ResumePage />
    </div>
  )
}