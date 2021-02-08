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
          <p>Campfire is a full-service creative agency. We're a group of polymaths who have expertise in video, web development, and marketing. Our <i>top priority</i> is your <u>bottom line</u> - we work efficiently to get your project done on time and within budget.</p>
        </div>
      </div>
      <div className={styles.content} ref={ref}>
        <div className={`${styles.c4} ${styles.box}`}
          style={ { marginLeft: ((entry?.intersectionRatio) * 100) - 100 + 'px', backgroundImage: `linear-gradient(${entry?.intersectionRatio * 180}deg, var(--blue), var(--blueDark))` }}
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
        <div className={`${styles.c4} ${styles.box}`}
          style={{ backgroundImage: `linear-gradient(${entry?.intersectionRatio * 180}deg, var(--red), var(--pink))` }}
        >
          <div>
            <h2>Web</h2>
            <h3>Technical wizardry with rapid results</h3>
            <p>Design, development, deployment - we've got you covered on everything. We can handle any and all aspects of a web project to get you more happy customers.</p>
          </div>
          { page !== 'web' && (
            <p>
              <Link href="/web">View offerings</Link>
            </p>
          )}
        </div>
        <div className={`${styles.c4} ${styles.box}`}
          style={ { marginRight: ((entry?.intersectionRatio) * 100) - 100 + 'px', backgroundImage: `linear-gradient(${entry?.intersectionRatio * 180}deg, var(--purple), var(--blueDark))` }}
        >
          <div>
            <h2>Marketing</h2>
            <h3>Turnkey marketing solutions</h3>
            <p>We’ll work with you to create a custom full-funnel marketing solution that’s right for your business. We’ll help you hone your message, develop the creative, and target the ads.</p>
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