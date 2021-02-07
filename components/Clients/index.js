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
          <img src="/customers/tomsteyer.svg" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/snowflake.svg" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/splc.png" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/aaa.png" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/trinasolar.png" />
        </div>
        <div className={styles.c4}>
          <img src="/customers/biodieselsustainabilitynow.svg" />
        </div>
      </div>
    </section>
  )
}