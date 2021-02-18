import Head from 'next/head'
import styles from 'styles/Home.module.scss'

export default function Web() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Development - Campfire Firm LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topVideo}>
        <div className={styles.topContent}>
          <div className={styles.overlayIcon}>
            <img src="/topography.svg" alt="topography" />
          </div>

          <h2 className={styles.title}>We're here to help build your perfect website</h2>
        </div>
      </div>

      <main className={styles.main}>
        <section id="work">
          <h2 className={styles.title}>Our Work</h2>
          <div className={styles.content}>
            <div className={styles.c9}>
              <p>With a decade of experience in WordPress, Drupal, and front-end technologies, we're ready to help take your project to the next level. Our focus is on building beautiful and fast websites that have excellent accessibility and are easy to use.</p>
            </div>

            <div className={styles.content}>
              <div className={`${styles.c4} ${styles.borderBox} ${styles.nopad}`}>
                <img src="/web/aaa.jpg" alt="AAA" />
              </div>
              <div className={`${styles.c4} ${styles.borderBox} ${styles.nopad}`}>
                <img src="/web/biodiesel.jpg" alt="Biodiesel Sustainability Now" />
              </div>
              <div className={`${styles.c4} ${styles.borderBox} ${styles.nopad}`}>
                <img src="/web/tom-climate.gif" alt="Tom Steyer" />
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <h2 className={styles.title}>Why Us</h2>
          <div className={styles.content}>
            <div className={styles.c7}>
              <p>We build interactive and engaging websites that are beautiful, bespoke, accessible, and fast. We use Wordpress, Drupal, Marketo, Hubspot, or completely custom code depending on your needs.</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c4} ${styles.borderBox}`}>
              <div>
                <div className={styles.icon}>
                  <svg clip-rule="evenodd" fill-rule="evenodd" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="256" cy="256" fill="none" r="182" stroke="var(--blue)" stroke-width="20" />
                    <path d="m315 424 28-15 54-156c10-25 13-45 13-62 0-32-13-60-36-63-21-2-33 19-32 31 2 29 31 45 31 85 0 28-18 73-31 117l-62-187 20-1c10 0 9-15-1-14-31 3-60 2-92 0-10-1-10 14-1 14l18 1 27 74-38 114-63-188 20-1c9 0 8-15-1-14-29 2-57 4-64-1l-8 24 84 233 25 14 54-158" fill-rule="nonzero" />
                  </svg>
                </div>
                <h2>WordPress</h2>
                <p>We have been working with WordPress since the 2007. Whether you want a custom design or you need to setup headless WordPress with Next.js - we can do it.</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.borderBox}`}>
              <div>
                <div className={styles.icon}>
                  <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="m245.404 50.863c24.502 29.141 38.973 44.7 81.596 62.137 21 9 40 21 56 38 .851 1.12 1.68 2.334 2.478 3.641 29.643 32.252 46.155 74.532 46.155 118.423 0 54.961-25.892 104.349-66.044 136.532-30.008 24.097-67.99 38.575-109.089 38.575-27.562 0-53.723-6.512-77.008-18.064-32.537-15.998-59.939-41.979-77.492-75.107-44-79-8-159 9-181l2.315-1.35c2.372-3.381 4.864-6.679 7.47-9.885.395-.581.8-1.169 1.215-1.765l.494-.306c16.927-20.191 38.481-36.679 63.506-47.694 31-15 53-24 57-65z" /><path d="m222.353 108.384c40.541 6.798-100.388 101.969-101.353 72.835 0-14.567 22.201-36.903 38.611-48.557 16.409-11.653 83.977-28.163 83.012-76.719 0 0 23.166 36.903-20.27 52.441m.965 166.064c-67.569 0-96.526 102.94-9.653 102.94 34.75 0 83.013-45.643 106.179-45.643s43.437 43.701 59.846 43.701c30.889 0 55.986-94.2 11.584-94.2-18.34 0-56.951 38.845-72.395 36.903-27.993-3.885-54.055-43.701-95.561-43.701m19.305 137.901c24.132 18.451 76.256 13.596 99.422-3.885 5.792-4.856 2.896-13.596-2.896-8.74-16.409 13.596-71.429 17.48-88.804 1.942-4.826-4.855-18.34 2.914-7.722 10.683m40.541-31.077c5.792-4.855 10.618-12.624 25.097-12.624s19.305 10.682 22.201 13.596c2.896 2.913 8.687-1.943 5.792-7.77-2.896-5.826-5.792-16.509-27.028-16.509s-28.958 13.596-32.819 16.509c-3.861 2.914-1.93 13.596 6.757 6.798" fill="#fff"/></g></svg>
                </div>
                <h2>Drupal</h2>
                <p>We've developed with Drupal for over a decade including migrations, theme development, and writing custom modules.</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.borderBox}`}>
              <div>
                <div className={styles.icon}>
                  <svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="m78.133 18.16h-56.266c-2.0391 0-3.707 1.668-3.707 3.707v9.9844h63.676v-9.9844c0.003906-2.0352-1.6523-3.707-3.7031-3.707zm-50.547 8.332c0 0.70312-0.57031 1.2734-1.2734 1.2734s-1.2734-0.57031-1.2734-1.2734v-1.6992c0-0.70312 0.57031-1.2734 1.2734-1.2734s1.2734 0.57031 1.2734 1.2734zm5.0391 0c0 0.70312-0.57031 1.2734-1.2734 1.2734-0.70312 0-1.2734-0.57031-1.2734-1.2734v-1.6992c0-0.70312 0.57031-1.2734 1.2734-1.2734 0.70313 0 1.2734 0.57031 1.2734 1.2734zm5.043 0c0 0.70312-0.57031 1.2734-1.2734 1.2734s-1.2734-0.57031-1.2734-1.2734v-1.6992c0-0.70312 0.57031-1.2734 1.2734-1.2734s1.2734 0.57031 1.2734 1.2734zm36.031 0.42578h-23.164c-0.70312 0-1.2734-0.57031-1.2734-1.2734s0.57031-1.2734 1.2734-1.2734h23.164c0.70312 0 1.2734 0.57031 1.2734 1.2734s-0.57031 1.2734-1.2734 1.2734z"/>
                    <path d="m18.16 78.133c0 2.0391 1.668 3.707 3.707 3.707h56.266c2.0508 0 3.707-1.668 3.707-3.707v-43.734h-63.68zm38.664-26.859c-0.49609-0.49609-0.49609-1.3047 0-1.8008 0.49609-0.49609 1.3047-0.49609 1.8008 0l5.8359 5.8359c0.23828 0.23828 0.37109 0.5625 0.37109 0.90234 0 0.33984-0.13281 0.66016-0.37109 0.89844l-5.8359 5.8359c-0.25 0.25-0.57422 0.375-0.90234 0.375-0.32422 0-0.65234-0.125-0.89844-0.375-0.49609-0.49609-0.49609-1.3047 0-1.8008l4.9375-4.9375zm-5.9102-6.8672c0.12891-0.69141 0.78516-1.1445 1.4844-1.0195 0.69141 0.12891 1.1484 0.79297 1.0195 1.4844l-4.3203 23.137c-0.11328 0.61328-0.64844 1.0391-1.25 1.0391-0.078125 0-0.15625-0.007813-0.23438-0.019531-0.69141-0.12891-1.1484-0.79297-1.0195-1.4844zm-15.367 10.902 5.8359-5.8359c0.49609-0.49609 1.3047-0.49609 1.8008 0s0.49609 1.3047 0 1.8008l-4.9375 4.9375 4.9375 4.9375c0.49609 0.49609 0.49609 1.3047 0 1.8008-0.25 0.25-0.57422 0.375-0.89844 0.375-0.32422 0-0.65234-0.125-0.90234-0.375l-5.8359-5.8359c-0.49609-0.5-0.49609-1.3086 0-1.8047z"/>
                  </g>
                  </svg>
                </div>
                <h2>Custom Solution</h2>
                <p>Need help with something more? We can develop a bespoke static site, a Ruby on Rails application, or Node.js and React application.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
