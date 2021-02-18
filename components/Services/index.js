import Link from 'next/link'
import styles from './Services.module.scss'
import { useIntersect, buildThresholdArray } from 'utils'

export default function Services({ page }) {
  const [ref, entry] = process.browser ? useIntersect({
    threshold: buildThresholdArray(100)
  }) : [null, null];

  return (
    <section id="services">
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.content}>
        <div className={styles.c9}>
          <p>Campfire is a full-service creative agency. We're a group of talented experts in video, web development, and marketing.</p>
        </div>
      </div>
      <div className={styles.content} ref={ref}>
        <div className={`${styles.c4} ${styles.box} ${styles.img}`}
          style={{
            marginLeft: ((entry?.intersectionRatio) * 100) - 100 + 'px',
            backgroundImage: `url('/video/Campfire_Set.jpg')`,
          }}
        >
          <div>
            <h2>Video</h2>
            <h3>No project is too big or too small</h3>
            <p>Whether you are looking for a commercial, political ad, or industry explainer - we’re ready to help. We’ve done it all and are ready to put our experience to work for you.</p>
          </div>
          { page !== 'video' && (
            <p>
              <Link href="/video">View work</Link>
            </p>
          )}
        </div>
        <div className={`${styles.c4} ${styles.box} ${styles.img}`}
          style={{
            backgroundImage: `url('/web/web.jpg')`,
          }}
        >
          <div>
            <h2>Web</h2>
            <h3>Technical wizardry with rapid results</h3>
            <p>Design, development, deployment - we've got you covered. We can handle any and all aspects of a web project and will work with you every step of the way.</p>
          </div>
          { page !== 'web' && (
            <p>
              <Link href="/web">View offerings</Link>
            </p>
          )}
        </div>
        <div className={`${styles.c4} ${styles.box} ${styles.img}`}
          style={{ 
            marginRight: ((entry?.intersectionRatio) * 100) - 100 + 'px',
            backgroundImage: `url('/marketing/marketing.jpg')`,
          }}
        >
          <div>
            <h2>Marketing</h2>
            <h3>Turnkey marketing solutions</h3>
            <p>We’ll work with you to create a custom full-funnel marketing solution that’s right for your business. We will hone your message, develop the creative, and target the ads.</p>
          </div>
          { page !== 'marketing' && (
            <p>
              <Link href="/marketing">View solutions</Link>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}