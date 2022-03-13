import Head from 'next/head'
import Selector from 'components/Selector'
import styles from './Video.module.scss'
import videos from './videos.json'
import { useIntersect, buildThresholdArray } from 'utils'

export default function Video() {
  const [ref, entry] = process.browser ? useIntersect({
    threshold: buildThresholdArray(100)
  }) : [null, null];

  const tags = ['all', 'Political', 'Ads', 'Explainers', 'Miscellaneous'];
  // videos.map(v => {
  //   for (let t of v.tags) {
  //     if (tags.indexOf(t) < 0) {
  //       tags.push(t);
  //     }
  //   }
  // });

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
            title="background video"
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
        <section id="work">
          <h2 className={styles.title}>Our Work</h2>
          <div className={styles.content}>
            <div className={styles.c9}>
              <p>With over a decade of production experience Campfire is ready to help you promote your product, campaign, or cause. From script to final video - we’ll be with you every step of the way.</p>
            </div>
          </div>
          <Selector tags={tags} videos={videos.sort((a, b) => a.priority - b.priority)} />
        </section>

        <section id="about" ref={ref}>
          <h2 className={styles.title}>Why Us</h2>
          <div className={styles.content}>
            <div className={styles.c7}>
              {/* <p>Campfire is more than just a production company. We’re a full-service creative agency.</p> */}
              <p></p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c4} ${styles.borderBox}`}
              style={{ borderImageSource: `linear-gradient(${entry?.intersectionRatio * 180}deg, var(--blue), var(--blueDark))` }}
            >
              <div>
                <div className={styles.icon}>
                  <svg height="100pt" viewBox="0 0 100 100" width="100pt" xmlns="http://www.w3.org/2000/svg"><path d="m41.586 11.062c21.383 0 38.719 17.336 38.719 38.719 0 13.742-7.1641 25.812-17.957 32.684h31.734c4.0625 0 4.0625 6.1797 0 6.1797-6.7305 0-50.762.74219-53.473-.15625-20.934-.51562-37.746-17.652-37.746-38.707 0-21.383 17.336-38.719 38.719-38.719zm25.559 38.719c0 5.0078-4.0625 9.0703-9.0703 9.0703-5.0117 0-9.0703-4.0625-9.0703-9.0703 0-5.0117 4.0625-9.0703 9.0703-9.0703 5.0117 0 9.0703 4.0625 9.0703 9.0703zm-25.559 25.555c-5.0117 0-9.0703-4.0586-9.0703-9.0703s4.0625-9.0703 9.0703-9.0703 9.0703 4.0625 9.0703 9.0703c0 5.0117-4.0625 9.0703-9.0703 9.0703zm-25.559-25.555c0-5.0117 4.0625-9.0703 9.0703-9.0703 5.0117 0 9.0703 4.0625 9.0703 9.0703s-4.0625 9.0703-9.0703 9.0703c-5.0117 0-9.0703-4.0625-9.0703-9.0703zm25.559-25.559c5.0078 0 9.0703 4.0625 9.0703 9.0703 0 5.0117-4.0625 9.0703-9.0703 9.0703-5.0117 0-9.0703-4.0625-9.0703-9.0703 0-5.0117 4.0625-9.0703 9.0703-9.0703z" fillRule="evenodd"/></svg>
                </div>
                <h3>Proven Storytellers</h3>
                <p>We can help turn your ideas into engaging videos. Just tells us what you’re trying to communicate, who you want to reach, and we can do the rest.</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.borderBox}`}
              style={{ borderImageSource: `linear-gradient(${entry?.intersectionRatio * 180}deg, var(--red), var(--pink))` }}
            >
              <div>
                <div className={styles.icon}>
                  <svg height="100pt" viewBox="0 0 100 100" width="100pt" xmlns="http://www.w3.org/2000/svg"><g><path d="m50.004 10h-.003906c-13.805 0-25 11.195-25 25 0 6.9062 2.7969 13.152 7.3242 17.68 3.5117 3.5156 5.7344 7.8086 6.7188 12.32h21.918c.98047-4.5156 3.207-8.8086 6.7148-12.32 4.5273-4.5273 7.3242-10.777 7.3242-17.68 0-13.805-11.191-25-24.996-25zm-7.0742 32.07-5.3047 5.3047c-6.8359-6.8359-6.8359-17.914 0-24.754l5.3047 5.3047c-3.9062 3.9102-3.9062 10.238 0 14.145z"/><path d="m42.93 42.07c-3.9062-3.9062-3.9062-10.234 0-14.145l-5.3047-5.3047c-6.8359 6.8359-6.8359 17.918 0 24.754z" fill="none"/><path d="m60.355 72.5h-20.711v7.1445c0 5.7188 4.6328 10.355 10.355 10.355 5.7188 0 10.355-4.6367 10.355-10.355l-.003907-7.1445z"/></g></svg>
                </div>
                <h3>A Decade of Experience</h3>
                <p>In our decade of producing videos we’ve seen and done it all. We know all the potential pitfalls and will use our experience to help you create the right video for your business needs.</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.borderBox}`}
              style={{ borderImageSource: `linear-gradient(${entry?.intersectionRatio * 180}deg, var(--secondary), var(--blueDark))` }}
            >
              <div>
                <div className={styles.icon}>
                  <svg height="100pt" viewBox="0 0 100 100" width="100pt" xmlns="http://www.w3.org/2000/svg"><path d="m20.004 52.402h45.051v9.1875h-45.051z"/><path d="m11.668 89.484h61.715c.93359 0 1.668-.75 1.668-1.668v-43.75c0-.91797-.73438-1.668-1.668-1.668h-8.2891c4.4336-3.1992 7.3398-8.3984 7.3398-14.266 0-9.7148-7.8984-17.617-17.602-17.617-8.0938 0-14.91 5.4883-16.965 12.934-2.5547-3.4414-6.6328-5.6836-11.234-5.6836-7.7344 0-14.016 6.2852-14.016 14 0 4.2539 1.9141 8.0625 4.9219 10.633h-5.8711c-.91797 0-1.668.75-1.668 1.668v43.75c0 .91797.75 1.668 1.668 1.668zm43.164-69.684c4.582 0 8.3164 3.7344 8.3164 8.332 0 4.582-3.7344 8.332-8.3164 8.332-4.6016 0-8.3516-3.75-8.3516-8.332.003906-4.5977 3.7539-8.332 8.3516-8.332zm-15.211 17.164c1.25 2.1406 2.9336 3.9883 4.9375 5.4336h-8.8438c1.707-1.457 3.0547-3.3164 3.9062-5.4336zm-12.988-11c3.1836 0 5.7852 2.6016 5.7852 5.8008s-2.6016 5.8008-5.7852 5.8008c-3.1992 0-5.8008-2.6016-5.8008-5.8008s2.6016-5.8008 5.8008-5.8008zm-9.9648 24.77c0-.92188.74609-1.668 1.668-1.668h48.387c.92188 0 1.668.74609 1.668 1.668v12.52c0 .92188-.74609 1.668-1.668 1.668h-48.387c-.92188 0-1.668-.74609-1.668-1.668z"/><path d="m87.582 48.434-9.1992 4.6992v25.617l9.1992 4.6992c.23438.13281.5.18359.75.18359.30078 0 .60156-.082031.86719-.25.5-.30078.80078-.83203.80078-1.418v-32.047c0-.58203-.30078-1.1172-.80078-1.4336-.48438-.30078-1.0977-.31641-1.6172-.050781z"/><path d="m54.832 33.133c2.75 0 4.9844-2.25 4.9844-5 0-2.7656-2.2344-5-4.9844-5-2.7656 0-5.0156 2.2344-5.0156 5 0 2.75 2.25 5 5.0156 5z"/><path d="m26.633 34.234c1.3516 0 2.4492-1.1172 2.4492-2.4648 0-1.3672-1.1016-2.4648-2.4492-2.4648-1.3672 0-2.4648 1.1016-2.4648 2.4648 0 1.3477 1.0977 2.4648 2.4648 2.4648z"/></svg>
                </div>
                <h3>One shoot, lots of edits</h3>
                <p>Planning a two-minute video? Great! We can help you turn that into a tighter shorter script which will play better on social media - and film both. Foresight makes an efficient budget.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
