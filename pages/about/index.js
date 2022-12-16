import Head from 'next/head'
import styles from './About.module.scss'
import Selector from 'components/Selector'

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
              <p></p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c6} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/morgan.jpg" />
                </div>
                <div>
                  <h2>Morgan White, Co-Founder</h2>
                  <p>Morgan has more than a decade of experience producing award-winning creative media. From cinematography to writing, producing, directing, editing, live streaming, and managing teams of designers and animators - over the course of his career he has done it all.</p>
                </div>
              </div>
            </div>
            <div className={`${styles.c6} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/bran.jpg" />
                </div>
                <div>
                  <h2>Bran Sorem, Co-Founder</h2>
                  <p>Bran started his career as a film composer before moving into software development. He then developed the first browser-based underwater robot video and control software. He has over a decade of experience in sound design. He holds a M.S. in Computer Science.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="creative">
          <h2 className={styles.title}>Creative Team</h2>
          <div className={styles.content}>
            <div className={styles.c7}>
              <p></p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c4} ${styles.person}`}>
              <div>
                <div className={styles.personImage}>
                  <img src="/team/avery.jpg" />
                </div>
                <div>
                  <h2>Avery Peterson, Freelance Videographer</h2>
                  <p>Avery Peterson is currently directing a documentary at San Quentin State Prison. She has a passion for harnessing visual storytelling for the public good. Avery is an award-winning alumna of San Francisco State's Journalism Program.</p>
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
                  <h2>Frank Wells, Freelance Motion Graphics</h2>
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
                  <h2>Melissa Cetlin, Freelance Graphic Designer</h2>
                  <p>Melissa works primarily with clients who are mission driven to make the world a more just and sustainable place. She works in the political and nonprofit world - helping them across the range of design needs from logos to social media and everything in between.</p>
                </div>
              </div>
              <p><a href="https://www.hellomelissacetlin.com/" target="_blank" rel="noopener noreferrer">Learn more here</a></p>
            </div>
          </div>
        </section>

        <section id="work">
          <h2 className={styles.title}>Our Work</h2>
          <div className={styles.content}>
            <div className={styles.c9}>
              <p>We've scaled ads for Presidential campaigns, small to medium sized businesses, and multinational Enterprises in a wide array of industries to craft messaging and campaigns that generate real results. Our <i>top priority</i> is your <u>bottom line</u> - we work efficiently to get your project done on time and within budget.</p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.c12}>
              <Selector videos={
                [
                  {
                    "title": "Gig Car Share - On Your Terms",
                    "id": "508962313",
                    "priority": 1,
                    "tags": ["Ads"]
                  }, {
                    "title": "Flipped the House",
                    "id": "381715174",
                    "priority": 2,
                    "tags": ["Ads"]
                  }, {
                    "title": "No on U1 - Digital Ad",
                    "id": "199232260",
                    "priority": 3,
                    "tags": ["Ads"]
                }]
              } />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.c4}>
              <img src="/ads/Trina_CI_Uncertainty.jpg" alt="Trina C&I ad" />
            </div>
            <div className={styles.c4}>
              <img src="/ads/Trina_Residential_ReliableAsSun.jpg" alt="Trina Residential ad" />
            </div>
            <div className={styles.c4}>
              <img src="/ads/Trina_TrinaPro_SmartSolution.jpg" alt="TrinaPro ad" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
