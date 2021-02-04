import styles from './Header.module.scss'
import useDarkMode from 'use-dark-mode'
import { useEffect } from 'react'

const Header = () => {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    const b = document.getElementsByTagName('body')[0];

    if (darkMode.value) {
      b.classList.add('darkmode');
    } else {
      b.classList.remove('darkmode');
    }
  }, [darkMode.value]);

  const triggerDark = () => {
    darkMode.toggle();
  };

  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <img className={styles.logo} src="/img/campsimple.svg" />
        <h1 className={styles.title}>Campfire</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        className={styles.darkMode}
        onClick={triggerDark}>
          {/* {darkMode.value ?
            <>🌕</> : <>🌑</>
          } */}
      </div>
    </header>
  );
}

export default Header