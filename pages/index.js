import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import Services from 'components/Services'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Campfire Firm LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topVideo}>
        <div className={styles.overlay}></div>
        <div className={styles.videoBG}>
          <iframe
            src="https://player.vimeo.com/video/508037869?background=1&autopause=false"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* <img
          className={styles.logoImg}
          src="/animation.gif"
          alt="logo"
        /> */}

        <div className={styles.topContent}>
          <h2 className={styles.title}>Creative agency with marketing and technical expertise</h2>
        </div>
      </div>

      <main className={styles.main}>
        <Services />

        <section id="work">
          <h2 className={styles.title}>Our Work</h2>
          <div className={styles.content}>
          </div>
        </section>

        <section id="why">
          <h2 className={styles.title}>Why Us</h2>
          <div className={styles.content}>
            <div className={styles.c7}>
              <p>Campfire is more than just a production company. We’re a full-service creative agency.</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c4} ${styles.blackBox}`}>
              <div>
                <h2>Once upon a time</h2>
                <p>Lorem ispum dolor sit...</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.blackBox}`}>
              <div>
                <h2>In the beginning</h2>
                <p>Lorem ipsum dolor sit...</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.blackBox}`}>
              <div>
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
