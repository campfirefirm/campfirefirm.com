import Head from 'next/head'
import styles from './About.module.scss'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Campfire Firm LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.topVideo} ${styles.purple}`}>
        <div className={styles.topContent}>
          <div className={styles.overlayIcon}>
            <img src="/topography.svg" alt="topography" />
          </div>

          <h2 className={styles.title}>Meet our team</h2>
        </div>
      </div>

      <main className={styles.main}>
        <section id="founders">
        <h2 className={styles.title}>Founders</h2>
          <div className={styles.content}>
            <div className={styles.c7}>
              <p>TODO</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c6} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/morgan.jpg" />
                </div>
                <div>
                  <h2>Morgan White</h2>
                  <p>TODO</p>
                </div>
              </div>
            </div>
            <div className={`${styles.c6} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/bran.jpg" />
                </div>
                <div>
                  <h2>Bran Sorem</h2>
                  <p>TODO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="creative">
          <h2 className={styles.title}>Creative Team</h2>
          <div className={styles.content}>
            <div className={styles.c7}>
              <p>TODO</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c4} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/avery.jpg" />
                </div>
                <div>
                  <h2>Avery Peterson</h2>
                  <p>Before becoming a contract video producer, editor and consultant, Avery Peterson served as the lead videographer for Tom Steyer’s 2020 Presidential Campaign, where she traveled across the country capturing the campaign’s daily momentum. She previously served as the lead video specialist for a national issue-based campaign and is currently directing a documentary at San Quentin State Prison. Avery has a passion for and track record of harnessing visual storytelling for public good. She is an award-winning alumni of San Francisco State’s Journalism Program.</p>
                </div>
              </div>
              <p><a href="https://www.averylynnpeterson.com/" target="_blank" rel="noopener noreferrer">Learn more here</a></p>
            </div>
            <div className={`${styles.c4} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/frank.jpg" />
                </div>
                <div>
                  <h2>Frank Wells</h2>
                  <p>Frank Wells is a senior motion graphic designer/video editor with projects related to film (Star Wars Rogue One, Harry Potter), TV (Ellen DeGeneres, Netflix, HBO), and national campaigns for corporate brands (Tom Steyer, Nissan, Salesforce, Verizon).</p>
                </div>
              </div>
              <p><a href="http://www.discoforest.com/" target="_blank" rel="noopener noreferrer">Lean more here</a></p>
            </div>
            <div className={`${styles.c4} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/melissa.jpg" />
                </div>
                <div>
                  <h2>Melissa Cetlin</h2>
                  <p>Melissa is a professionally trained graphic designer, and alumni from Rhode Island School of Design (RISD). She has been managing her own design business for over a decade. Melissa works primarily with clients who are mission driven to make the world a more just and sustainable place. Much of her experience is in the political and nonprofit world, helping them across the range of design needs; from logos to social media and everything in between.</p>
                </div>
              </div>
              <p><a href="https://www.hellomelissacetlin.com/" target="_blank" rel="noopener noreferrer">Learn more here</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
