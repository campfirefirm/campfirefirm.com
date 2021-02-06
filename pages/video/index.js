import Head from 'next/head'
import Selector from 'components/Selector'
import styles from './Video.module.scss'
import videos from './videos.json'

export default function Video() {
  const tags = ['all'];
  videos.map(v => {
    for (let t of v.tags) {
      if (tags.indexOf(t) < 0) {
        tags.push(t);
      }
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Video - Campfire Firm LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topVideo}>
        <div className={styles.overlay}></div>
        <div className={styles.videoBG}>
          <iframe
            id="topVideo"
            src="https://player.vimeo.com/video/508037869?background=1&autopause=false"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.topContent}>
          <h2 className={styles.title}>We’re here to tell your story</h2>
          {/* <p>
            Whether you are looking for a commercial, political ad, or industry explainer - we’re ready to help. We’ve done it all and are ready to put our experience to work for you.
          </p> */}
        </div>
      </div>

      <main className={styles.main}>
        <section id="video">
          <h2 className={styles.title}>Our Work</h2>
          <div className={styles.content}>
            <div className={styles.five}>
              With over a decade of production experience Campfire is ready to help you promote your product, campaign, or cause. From script to final video - we’ll be with you every step of the way.
            </div>
          </div>
          <Selector tags={tags} videos={videos.sort((a, b) => a.priority - b.priority)} />
        </section>
      </main>
    </div>
  )
}
