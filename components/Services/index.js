import Link from 'next/link'
import styles from './Services.module.scss'
import { useIntersect, buildThresholdArray } from 'helpers'

export default function Services({ page }) {
  const [ref, entry] = process.browser ? useIntersect({
    threshold: buildThresholdArray(100)
  }) : [null, null];

  return (
    <section id="services">
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.content}>
        <div className={styles.c7}>
          <p>Campfire is more than just a production company. We’re a full-service creative agency.</p>
        </div>
      </div>
      <div className={styles.content} ref={ref}>
        <div className={`${styles.c4} ${styles.box}`} style={ { marginLeft: ((entry?.intersectionRatio) * 100) - 100 + 'px' }}>
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
        <div className={`${styles.c4} ${styles.box}`}>
          <div>
            <h2>Web</h2>
            <h3>Technical wizardry with rapid results</h3>
            <p>From design, to templates, to integrations, to management - we can handle it all.</p>
          </div>
          {/* { page !== 'web' && (
            <p>
              <Link href="/web">View offerings</Link>
            </p>
          )} */}
        </div>
        <div className={`${styles.c4} ${styles.box}`} style={ { marginRight: ((entry?.intersectionRatio) * 100) - 100 + 'px' }}>
          <div>
            <h2>Marketing</h2>
            <h3>Turnkey marketing solutions</h3>
            <p>We’ll work with you to create a custom full-funnel marketing solution that’s right for your business. We’ll help you hone your message, develop the creative, and target the ads.</p>
          </div>
          {/* { page !== 'marketing' && (
            <p>
              <Link href="/marketing">Learn more</Link>
            </p>
          )} */}
        </div>
      </div>
    </section>
  )
}