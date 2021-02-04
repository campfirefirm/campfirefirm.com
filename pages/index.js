import Head from 'next/head'
import styles from '../styles/Home.module.scss'

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
            src="https://player.vimeo.com/video/508037869?background=1"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <img className={styles.logoImg} src="/img/animation.gif" />
      </div>

      <main className={styles.main}>
        <section id="services">
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.content}>
            <div className={styles.half}>
              <p className={styles.subtitle}>
                We’re a full service creative agency
              </p>
              <p>
                With over a decade of production experience Campfire is ready to help you promote your product, campaign, or cause. From script to final video - we’ll be with you every step of the way.
              </p>
            </div>
            <div className={styles.half}>
              <img src="/img/innovation.svg" alt="innovation" />
            </div>
          </div>
        </section>

        <section id="video">
          <h2 className={styles.title}>Video</h2>
          <div className={styles.content}>
            <div className={styles.half}>
              <img src="/img/Informationflow_Monochromatic.svg" alt="video" />
            </div>
            <div className={styles.half}>
              <p className={styles.subtitle}>
                No project is to big or too small
              </p>
              <p>
                Whether you are looking for a commercial, political ad, or industry explainer - we’re ready to help. We’ve done it all and are ready to put our experience to work for you.
              </p>
              <a className="btn" href="#">See our work</a>
            </div>
          </div>
        </section>

        <section id="web">
          <h2 className={styles.title}>Web</h2>
          <div className={styles.content}>
            <div className={styles.half}>
              <p className={styles.subtitle}>
                Full-service Website Development
              </p>
              <p>
                If you need a simple website or help with a complex WordPress or Drupal installation, we can handle it.
              </p>
              <a className="btn" href="#">See our offerings</a>
            </div>
            <div className={styles.half}>
              <img src="/img/web.svg" alt="web" />
            </div>
          </div>
        </section>

        <section id="marketing">
          <h2 className={styles.title}>Marketing</h2>
          <div className={styles.content}>
            <div className={styles.half}>
              <img src="/img/analytics.svg" alt="marketing" />
            </div>
            <div className={styles.half}>
              <p className={styles.subtitle}>
                Turnkey Marketing Solutions
              </p>
              <p>
                We’ll work with you to create a custom full-funnel marketing solution that’s right for your business. We’ll help hone your message, develop the creative, and target the ads.
              </p>
              <a className="btn" href="#">Learn how</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
