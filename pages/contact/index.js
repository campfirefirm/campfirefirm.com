import Head from 'next/head'
import Services from 'components/Services'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Campfire Firm LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id="contact">
          <h2 className={styles.title}>Reach out now!</h2>
          <div className={styles.content}>
            <div className={styles.c9}>
              <p>We'll follow up with you ASAP. Please include as much detail as you can.</p>
            </div>
          </div>
          <div className="col form">
            <iframe title="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSciY_K3LjsIaY1Csi8lKRmvR7UTTB5SbGPIlImuP7laptPb6Q/viewform?embedded=true" width="640" height="682" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </section>

        <Services />
      </main>
    </div>
  )
}
