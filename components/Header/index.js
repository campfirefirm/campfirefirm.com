import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.branding}>
          {/* <div className={styles.logo}>
            <img src="/campsimple.svg" alt="logo" />
          </div> */}
          <h1 className={styles.title}>Campfire Firm</h1>
        </div>
      </Link>
      <nav className={styles.nav}>
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