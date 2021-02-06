import Head from 'next/head'
import Link from 'next/link'
import styles from 'styles/Home.module.scss'
// import Image from 'next/image'

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

        <img
          className={styles.logoImg}
          src="/animation.gif"
          alt="logo"
        />

        {/* <Image
          className={styles.logoImg}
          src="/animation.gif"
          alt="logo"
          width={400}
          height={480}
        /> */}
      </div>

      <main className={styles.main}>
        <section id="services">
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.content}>
            <p className={styles.subtitle}>
              We’re a full service creative agency
            </p>
            <p>
              With over a decade of production experience Campfire is ready to help you promote your product, campaign, or cause. From script to final video - we’ll be with you every step of the way.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.third}>
              <div classname={styles.pink}>
                <h3>Video</h3>
              </div>
            </div>
            <div className={styles.third}>
              <div className={styles.purple}>
                <h3>Web</h3>
              </div>
            </div>
            <div className={styles.third}>
              <div classname={styles.blue}>
                <h3>Marketing</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="video">
          <h2 className={styles.title}>Video</h2>
          <div className={styles.content}>
            <div className={styles.half}>
              <img
                src="/Informationflow_Monochromatic.svg"
                alt="video"
              />
              {/* <Image
                src="/Informationflow_Monochromatic.svg"
                alt="video"
                width={796}
                height={600}
              /> */}
            </div>
            <div className={styles.half}>
              <p className={styles.subtitle}>
                No project is to big or too small
              </p>
              <p>
                Whether you are looking for a commercial, political ad, or industry explainer - we’re ready to help. We’ve done it all and are ready to put our experience to work for you.
              </p>
              <Link href="/video" className="btn">See our work</Link>
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
              <img
                src="/web.svg"
                alt="web"
              />
              {/* <Image
                src="/web.svg"
                alt="web"
                width={796}
                height={600}
              /> */}
            </div>
          </div>
        </section>

        <section id="marketing">
          <h2 className={styles.title}>Marketing</h2>
          <div className={styles.content}>
            <div className={styles.half}>
              <img
                src="/analytics.svg"
                alt="marketing"
              />
              {/* <Image
                src="/analytics.png"
                alt="marketing"
                width={796}
                height={600}
              /> */}
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

        <section id="work">
          <h2 className={styles.title}>Our Work</h2>
          <div className={styles.content}>
          </div>
        </section>
      </main>
    </div>
  )
}
