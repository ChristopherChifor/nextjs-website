import Head from 'next/head'
import App from '../stuff/App'
import ResumePage from '../stuff/components/ResumePage'
import styles from '../styles/Home.module.css'

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResumePage />
    </div>
  )
}