import styles from './Clients.module.scss'

export default function Clients({ page }) {
  return (
    <section id="clients">
      <h2 className={styles.title}>Credibility</h2>
      <div className={styles.content}>
        <div className={styles.c7}>
          <p>Here are some of our happy customers:</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.c4}>
          <img src="/customers/tomsteyer.svg" alt="Tom Steyer" loading="lazy" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/snowflake.svg" alt="Snowflake" loading="lazy" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/splc.png" alt="Southern Poverty Law Center" loading="lazy" />
        </div>

        <div className={styles.c4}>
          <img src="/customers/aaa.png" alt="AAA" loading="lazy" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/trinasolar.png" alt="Trina Solar" loading="lazy" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/biodieselsustainabilitynow.svg" alt="Biodiesel Sustainability Now" loading="lazy" />
        </div>

        <div className={styles.c4}>
          <img src="/customers/thoughtspot.svg" alt="Thoughtspot" loading="lazy" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/deckhand.png" alt="Dechkand" loading="lazy" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/tigercomm.png" alt="Tigercomm" loading="lazy" />
        </div>
      </div>
    </section>
  )
}