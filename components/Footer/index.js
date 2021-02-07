import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.logoImg}
        src="/animation.gif"
        alt="logo"
        loading="lazy"
      />
      <div className={styles.copy}>
        &copy; 2021 Campfire Firm LLC
      </div>
    </footer>
  )
}