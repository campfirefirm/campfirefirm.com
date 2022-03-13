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
      <div className={styles.social}>
        <div className={styles.icon}>
          <a href="https://www.linkedin.com/company/campfirefirm">
            <svg xmlns="http://www.w3.org/2000/svg"
            width="40px" height="40px"
            aria-label="LinkedIn" role="img"
            viewBox="0 0 512 512"
            fill="#fff"><rect
            width="512" height="512"
            rx="15%"
            fill="var(--black)"
            // fill="#0077b5"
            /><circle fill="var(--white)" cx="142" cy="138" r="37"/>
              <path stroke="var(--white)" strokeWidth="66" d="M244 194v198M142 194v198"/>
              <path fill="var(--white)" d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"/>
            </svg>
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://www.facebook.com/campfirefirm">
            <svg xmlns="http://www.w3.org/2000/svg"
            width="40px" height="40px"
            aria-label="Facebook" role="img"
            viewBox="0 0 512 512"><rect
            width="512" height="512"
            rx="15%"
            fill="var(--black)"
            // fill="#1877f2"
            /><path d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z" fill="var(--white)"/></svg>
          </a>
        </div>
        <div className={styles.icon}>
          <a href="mailto:hello@campfirefirm.com">
            <svg xmlns="http://www.w3.org/2000/svg"
            width="40px" height="40px"
            aria-label="Email" role="img"
            viewBox="0 0 512 512"><rect
            width="512" height="512"
            rx="15%"
            fill="var(--black)"
            // fill="teal"
            />
              <rect width="356" height="256" x="78" y="128" fill="var(--white)" rx="8%"/>
              <path fill="none" stroke="var(--black)" strokeWidth="20" d="M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        &copy; 2022 Campfire Firm LLC
      </div>
    </footer>
  )
}