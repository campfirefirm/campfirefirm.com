import styles from './Header.module.scss'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <Link href="/">
          {/* <div className={styles.logo}>
            <img src="/campsimple.svg" alt="logo" />
          </div> */}
          <h1 className={styles.title}>Campfire Firm</h1>
        </Link>
        <div className={styles.mobileSelector} onClick={() => setShowMobile(!showMobile)}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </div>
      <nav className={styles.nav} data-showmobile={showMobile}>
        <ul>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#work">Work</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        // className={styles.darkMode}
        // onClick={triggerDark}
      >
          {/* {darkMode.value ?
            <>🌕</> : <>🌑</>
          } */}
      </div>
    </header>
  );
}

export default Header