import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <html lang="en">
    <div className={styles.container}>
      <Head>
        <title>ZetaSJ</title>
        <meta name="description" content="ZetaSJ homepage, created by TechnoShip123." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ZetaSJ.
        </h1>

        <p className={styles.description}>
          <a href="https://github.com/TechnoShip123"><FontAwesomeIcon icon={faGithub} /> TechnoShip123</a>
        </p>

        <div className={styles.grid}>
          <a href="projects/web-testing" className={styles.card}>
            <h2><FontAwesomeIcon icon={faGlobe} /> Web-Testing &rarr;</h2>
            <p>Testing repository for web frameworks &amp; technologies.</p>
          </a>

          <a href="projects/web-testing" className={styles.card}>
            <h2><FontAwesomeIcon icon={faRobot} /> ThonkBot &rarr;</h2>
            <p>Multi-purpose Discord chatbot, <span style={{color: "red"}}>now deprecated</span>.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </html>
  )
}
