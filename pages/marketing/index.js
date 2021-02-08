import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import Services from 'components/Services'
import Selector from 'components/Selector'

export default function Marketing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marketing - Campfire Firm LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.topVideo} ${styles.purple}`}>
        <div className={styles.topContent}>
          <div className={styles.overlayIcon}>
            <img src="/topography.svg" alt="topography" />
          </div>

          <h2 className={styles.title}>We're here to help generate quality leads</h2>
        </div>
      </div>

      <main className={styles.main}>
        <section id="work">
          <h2 className={styles.title}>Our Work</h2>
          <div className={styles.content}>
            <div className={styles.c9}>
              <p>We've scaled ads for Presidential campaigns, small to medium sized businesses, and multinational Enterprises in a wide array of industries to craft messaging and campaigns that generate real results.</p>
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

        <section id="about">
          <h2 className={styles.title}>Why Us</h2>
          <div className={styles.content}>
            <div className={styles.c7}>
              <p>Campfire Firm is a creative team of experts in design, video production, web development, and digital marketing who are ready to help tell your story.</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.c4} ${styles.borderBox}`}>
              <div className={styles.icon}>
                <svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="m9.375 34.375h81.25v14.062h-81.25z"/>
                  <path d="m43.75 84.375h12.5v12.5h-12.5z"/>
                  <path d="m28.125 7.8125c0 6.25-9.375 6.25-9.375 0s9.375-6.25 9.375 0"/>
                  <path d="m32.5 28.125h-18.125c-0.9375 0-1.7188-0.9375-1.5625-1.875l1.4062-6.0938c0.78125-3.5938 4.0625-6.0938 7.6562-6.0938h3.125c3.5938 0 6.875 2.5 7.6562 6.0938l1.4062 6.0938c0.15625 0.9375-0.625 1.875-1.5625 1.875z"/>
                  <path d="m56.25 10.938c0 6.25-9.375 6.25-9.375 0s9.375-6.25 9.375 0"/>
                  <path d="m60.625 31.25h-18.125c-0.9375 0-1.7188-0.9375-1.5625-1.875l1.4062-6.0938c0.78125-3.5938 3.9062-6.0938 7.6562-6.0938h3.125c3.5938 0 6.875 2.5 7.6562 6.0938l1.4062 6.0938c0.15625 0.9375-0.625 1.875-1.5625 1.875z"/>
                  <path d="m81.25 7.8125c0 6.25-9.375 6.25-9.375 0s9.375-6.25 9.375 0"/>
                  <path d="m85.625 28.125h-18.125c-0.9375 0-1.7188-0.9375-1.5625-1.875l1.4062-6.0938c0.78125-3.5938 4.0625-6.0938 7.6562-6.0938h3.125c3.5938 0 6.875 2.5 7.6562 6.0938l1.4062 6.0938c0.15625 0.9375-0.625 1.875-1.5625 1.875z"/>
                  <path d="m46.875 60.938v1.5625c0 0.9375 0.625 1.5625 1.5625 1.5625v-4.6875c-0.9375 0-1.5625 0.625-1.5625 1.5625z"/>
                  <path d="m51.562 71.875c0.9375 0 1.5625-0.625 1.5625-1.5625v-1.5625c0-0.9375-0.625-1.5625-1.5625-1.5625z"/>
                  <path d="m11.094 51.562 32.188 29.688h13.594l32.188-29.688zm45.156 10.938h-3.125v-1.5625c0-0.9375-0.625-1.5625-1.5625-1.5625v4.6875c2.6562 0 4.6875 2.0312 4.6875 4.6875v1.5625c0 2.6562-2.0312 4.6875-4.6875 4.6875v1.5625h-3.125v-1.5625c-2.6562 0-4.6875-2.0312-4.6875-4.6875v-1.5625h3.125v1.5625c0 0.9375 0.625 1.5625 1.5625 1.5625v-4.6875c-2.6562 0-4.6875-2.0312-4.6875-4.6875v-1.5625c0-2.6562 2.0312-4.6875 4.6875-4.6875v-1.5625h3.125v1.5625c2.6562 0 4.6875 2.0312 4.6875 4.6875z"/>
                </g>
                </svg>
              </div>
              <div>
                <h2>Lead Generation</h2>
                <p>We work on the entire funnel to generate leads - from design to running ads to optimizing landing pages and web forms.</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.borderBox}`}>
              <div className={styles.icon}>
                <svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="m22.699 44.898c1.3984-1.3984 0.5-2.8984-1-3-2.5-0.19922-3.8984-2.8008-1.8984-5 2.1992-2 4.8984-0.60156 5 1.8984 0.10156 1.5 1.6016 2.3984 3 1l3.3008-3.3008c1-1 2.6016-1 3.6016 0l3.3008 3.3008c1.3984 1.3984 2.8984 0.5 2.8984-1 0.19922-2.5 2.8008-3.8984 5-1.8008 2 2.1992 0.60156 4.8984-1.8984 5-1.5 0.10156-2.3984 1.6016-1 2.8984l3.3984 3.3984c1 1 1 2.6016 0 3.6016l-2.4023 2.4062c-0.30078-0.80078-0.69922-1.5-1.3008-2.1016-2.1016-2.1016-5.1992-2-7.5 0.10156l-0.20312 0.20312c-2.1016 2.3008-2.1992 5.5-0.10156 7.5 0.60156 0.60156 1.3008 1 2.1016 1.3008l-2.3008 2.3008c-1 1-2.6992 1-3.6992 0l-3.3008-3.3008c-1.3984-1.3984-2.8008-0.60156-2.8984 1-0.19922 2.5-2.8008 3.8984-5 1.8008-2-2.1992-0.60156-4.8984 1.8008-5 1.5-0.10156 2.3008-1.5 0.89844-2.8984l-3.3008-3.3008c-1-1-1-2.6016 0-3.6016zm13.801-13.797c-1 1-1 2.6992 0 3.6992l2.3008 2.3008c0.30078-0.80078 0.69922-1.5 1.3008-2.1016 2-2 5.1992-2 7.5 0.10156l0.20313 0.20313c2.1016 2.3008 2.1992 5.5 0.10156 7.5-0.60156 0.60156-1.3008 1-2.1016 1.3008l2.3984 2.3984c1 1 2.6016 1 3.6016 0l3.3984-3.3984c1.3984-1.3984 2.8008-0.5 2.8984 1 0.19922 2.5 2.8008 3.8984 5 1.8984 2-2.1992 0.60156-4.8008-1.8008-5-1.5-0.10156-2.3984-1.6016-1-2.8984l3.3008-3.3008c1-1 1-2.6016 0-3.6016l-3.3008-3.3008c-1.3984-1.3984-0.5-2.8984 1-3 2.5-0.19922 3.8984-2.8008 1.8984-5-2.1992-2-4.8984-0.60156-5 1.8984-0.10156 1.5-1.6016 2.3984-3 1l-3.3008-3.3008c-1-1-2.6016-1-3.6016 0l-3.3008 3.3008c-1.3984 1.3984-2.8008 0.60156-2.8984-0.89844-0.19922-2.5-2.8008-3.8984-5-1.8008-2 2.1992-0.60156 4.8008 1.8008 5 1.5 0.10156 2.3008 1.5 1 2.8984zm28.5 8.8984c2 2 2 5.1992-0.10156 7.5l-0.20313 0.20312c-2.3008 2.1016-5.5 2.1992-7.5 0.10156-0.60156-0.60156-1-1.3008-1.3008-2.1016l-2.3984 2.3984c-1 1-1 2.6016 0 3.6016l3.3984 3.3984c1.3984 1.3984 0.5 2.8008-1 2.8984-2.5 0.19922-3.8984 2.8008-1.8984 5 2.1992 2 4.8008 0.60156 5-1.8008 0.10156-1.5 1.6016-2.3984 2.8984-1l3.3008 3.3008c1 1 2.6016 1 3.6016 0l3.3008-3.3008c1.3984-1.3984 2.8984-0.5 3 1 0.19922 2.5 2.8008 3.8984 5 1.8984 2-2.1992 0.60156-4.8984-1.8984-5-1.5-0.10156-2.3984-1.6016-1-3l3.3008-3.3008c1-1 1-2.6016 0-3.6016l-3.3008-3.3008c-1.3984-1.3984-0.60156-2.8008 0.89844-2.8984 2.5-0.19922 3.8984-2.8008 1.8008-5-2.1992-2-4.8008-0.60156-5 1.8008-0.10156 1.5-1.5 2.3008-2.8984 1l-3.3008-3.3008c-1-1-2.6992-1-3.6992 0l-2.3008 2.3008c1 0.20312 1.6992 0.60156 2.3008 1.2031zm-26.301 35.199c-2.5 0.19922-3.8984 2.8008-1.8984 5 2.1992 2 4.8984 0.60156 5-1.8984 0.10156-1.5 1.6016-2.3984 3-1l3.3008 3.3008c1 1 2.6016 1 3.6016 0l3.3008-3.3008c1.3984-1.3984 2.8008-0.60156 2.8984 0.89844 0.19922 2.5 2.8008 3.8984 5 1.8008 2-2.1992 0.60156-4.8008-1.8008-5-1.5-0.10156-2.3008-1.5-1-2.8984l3.3008-3.3008c1-1 1-2.6992 0-3.6992l-2.3008-2.3008c-0.30078 0.80078-0.69922 1.5-1.3008 2.1016-2 2-5.1992 2-7.5-0.10156l-0.20312-0.20312c-2.1016-2.3008-2.1992-5.5-0.10156-7.5 0.60156-0.60156 1.3008-1 2.1016-1.3008l-2.3984-2.3984c-1-1-2.6016-1-3.6016 0l-3.3984 3.3984c-1.3984 1.3984-2.8008 0.5-2.8984-1-0.19922-2.5-2.8008-3.8984-5-1.8984-2 2.1992-0.60156 4.8008 1.8008 5 1.5 0.10156 2.3984 1.6016 1 2.8984l-3.3008 3.3008c-1 1-1 2.6016 0 3.6016l3.3008 3.3008c1.5 1.6016 0.59766 3.1016-0.90234 3.1992z"/>
                </svg>
              </div>
              <div>
                <h2>Integration</h2>
                <p>We’re set apart by our ability to go from nothing to a full ad program - ideation, design, implementation, results, analysis.</p>
              </div>
            </div>
            <div className={`${styles.c4} ${styles.borderBox}`}>
              <div className={styles.icon}>
                <svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="m39.062 79.688c0 4.168-6.25 4.168-6.25 0s6.25-4.168 6.25 0"/>
                  <path d="m64.062 39.062h-56.25c-0.86328 0-1.5625 0.69922-1.5625 1.5625v37.5h23.66c0.44922-1.8047 1.6914-3.3125 3.3789-4.1016 1.6875-0.78906 3.6367-0.77344 5.3125 0.039062l11.758-14.117c0.55859-0.64453 1.5273-0.72266 2.1797-0.17969 0.65625 0.54688 0.75391 1.5117 0.22266 2.1758l-11.758 14.117v0.003906c0.44531 0.62109 0.76953 1.3203 0.96094 2.0625h23.66v-37.5c0-0.41406-0.16406-0.8125-0.45703-1.1055s-0.69141-0.45703-1.1055-0.45703zm-45.766 27.672c-0.44531 0.44922-1.1211 0.57812-1.7031 0.32812-0.1875-0.078125-0.36328-0.19141-0.51562-0.32812-0.29297-0.29688-0.45312-0.69531-0.45312-1.1094-0.003906-0.20312 0.035156-0.41016 0.125-0.59375 0.078125-0.1875 0.19141-0.36328 0.32812-0.51562 0.074219-0.066406 0.15234-0.12891 0.23438-0.1875 0.085938-0.058594 0.17969-0.10547 0.28125-0.14062 0.089844-0.046875 0.18359-0.078125 0.28125-0.09375 0.51562-0.10156 1.0469 0.054688 1.4219 0.42188 0.13672 0.15234 0.25 0.32812 0.32812 0.51562 0.25 0.58203 0.12109 1.2578-0.32812 1.7031zm7.8125-7.8125c-0.52734 0.52344-1.3516 0.60547-1.9727 0.19141-0.61719-0.41406-0.85938-1.207-0.57422-1.8945 0.078125-0.1875 0.19141-0.36328 0.32812-0.51562 0.14844-0.14062 0.32422-0.25391 0.51562-0.32812 0.28516-0.125 0.60156-0.16016 0.90625-0.09375 0.097656 0.015625 0.19141 0.046875 0.28125 0.09375 0.10156 0.035156 0.19531 0.082031 0.28125 0.14062 0.082031 0.058594 0.16016 0.12109 0.23438 0.1875 0.13672 0.15234 0.25 0.32812 0.32812 0.51562 0.25 0.58203 0.12109 1.2578-0.32812 1.7031zm11.266-3.6406c-0.14062 0.39062-0.45312 0.70312-0.84375 0.84375-0.37891 0.16797-0.80859 0.16797-1.1875 0-0.1875-0.078125-0.36328-0.19141-0.51562-0.32812-0.13672-0.15625-0.25391-0.32812-0.34375-0.51562-0.074219-0.1875-0.11328-0.39062-0.10938-0.59375 0.003906-0.41406 0.16797-0.80859 0.45312-1.1094 0.14844-0.14062 0.32422-0.25391 0.51562-0.32812 0.58203-0.24609 1.2539-0.11328 1.7031 0.32812 0.28516 0.30078 0.44531 0.69531 0.45312 1.1094-0.003906 0.20312-0.046875 0.40625-0.125 0.59375zm10.609 3.6406c-0.45312 0.4375-1.1172 0.57031-1.7031 0.34375-0.1875-0.089844-0.35938-0.20703-0.51562-0.34375-0.29297-0.29297-0.45703-0.69531-0.45312-1.1094 0.003906-0.20312 0.046875-0.40625 0.125-0.59375 0.074219-0.19141 0.1875-0.36719 0.32812-0.51562 0.074219-0.066406 0.15234-0.12891 0.23438-0.1875 0.085938-0.058594 0.17969-0.10547 0.28125-0.14062 0.089844-0.046875 0.18359-0.078125 0.28125-0.09375 0.20703-0.046875 0.41797-0.046875 0.625 0 0.097656 0.015625 0.19141 0.046875 0.28125 0.09375 0.10156 0.035156 0.19531 0.082031 0.28125 0.14062 0.082031 0.058594 0.16016 0.12109 0.23438 0.1875 0.13672 0.15234 0.25 0.32812 0.32812 0.51562 0.25 0.58203 0.12109 1.2578-0.32812 1.7031zm7.7969 7.8125c-0.44141 0.44531-1.1094 0.57812-1.6875 0.32812-0.19141-0.074219-0.36719-0.1875-0.51562-0.32812-0.29297-0.29297-0.45703-0.69531-0.45312-1.1094-0.003906-0.20312 0.035156-0.41016 0.125-0.59375 0.078125-0.1875 0.19141-0.36328 0.32812-0.51562 0.074219-0.066406 0.15234-0.12891 0.23438-0.1875 0.085938-0.058594 0.17969-0.10547 0.28125-0.14062 0.089844-0.046875 0.18359-0.078125 0.28125-0.09375 0.19922-0.046875 0.41016-0.046875 0.60938 0 0.10156 0.015625 0.20312 0.046875 0.29688 0.09375 0.097656 0.03125 0.1875 0.078125 0.26562 0.14062 0.085937 0.050781 0.16797 0.11328 0.23438 0.1875 0.29297 0.29688 0.46094 0.69141 0.46875 1.1094 0.003906 0.41797-0.16406 0.82031-0.46875 1.1094zm5.707 0.34375c-0.38672 0.14844-0.81641 0.13281-1.1953-0.035156-0.37891-0.17188-0.67188-0.48438-0.81641-0.87109-2.4609-6.3789-7.3984-11.488-13.691-14.156-6.2969-2.668-13.402-2.668-19.695 0-6.293 2.668-11.234 7.7773-13.691 14.156-0.30469 0.80469-1.207 1.2109-2.0156 0.90625-0.80469-0.30469-1.2109-1.207-0.90625-2.0117 3.4648-9.0234 11.289-15.656 20.754-17.598 9.4688-1.9414 19.273 1.0742 26.012 8 0.089843 0.070312 0.17187 0.15234 0.24219 0.24219 2.582 2.6914 4.5938 5.8711 5.9141 9.3555 0.14844 0.38672 0.13281 0.81641-0.035157 1.1953-0.17188 0.37891-0.48438 0.67188-0.87109 0.81641z"/>
                  <path d="m29.688 28.125c1.0664 0 2.1211 0.18359 3.125 0.53906v-0.42969c0-0.86328 0.69922-1.5625 1.5625-1.5625h6.8438c0.27344-0.75 0.58203-1.4922 0.92578-2.2227l-2.6445-2.6445-1.3633 1.3633c-0.48828 0.48047-1.2305 0.58984-1.8359 0.26953-0.77734-0.41797-1.5977-0.75391-2.4453-1.0078-0.66406-0.19922-1.1211-0.80859-1.1211-1.5v-3.7422h-6.0938v3.75c0 0.69141-0.45703 1.3008-1.1211 1.5-0.84766 0.25-1.6641 0.58594-2.4453 1-0.60547 0.32031-1.3516 0.20703-1.8359-0.27734l-2.6445-2.6367-4.3203 4.3203 2.6445 2.6445c0.48047 0.48438 0.59375 1.2305 0.26953 1.8359-0.41797 0.77734-0.75391 1.5977-1.0078 2.4453-0.19922 0.66406-0.80859 1.1211-1.5 1.1211h-3.7422v3.0469h9.5156c0.76172-4.5078 4.6641-7.8086 9.2344-7.8125z"/>
                  <path d="m23.66 35.938h9.1523v-3.8359c-0.94531-0.55859-2.0273-0.85156-3.125-0.85156-2.8398 0.011719-5.3164 1.9375-6.0273 4.6875z"/>
                  <path d="m35.938 85.938c-2.8398-0.011719-5.3164-1.9375-6.0273-4.6875h-23.66v10.938c0 0.41406 0.16406 0.8125 0.45703 1.1055s0.69141 0.45703 1.1055 0.45703h56.25c0.41406 0 0.8125-0.16406 1.1055-0.45703s0.45703-0.69141 0.45703-1.1055v-10.938h-23.66c-0.71094 2.75-3.1875 4.6758-6.0273 4.6875z"/>
                  <path d="m85.852 41.617c0.19922-0.65234 0.80469-1.1016 1.4922-1.1016h6.4062v-10.719h-6.4062c-0.6875 0-1.293-0.44922-1.4922-1.1016-0.41016-1.3242-0.94531-2.6016-1.5938-3.8203-0.32031-0.60938-0.21094-1.3555 0.27734-1.8398l4.5273-4.5195-7.5781-7.5781-4.5195 4.5312c-0.48438 0.48828-1.2305 0.60156-1.8398 0.27734-1.2188-0.64844-2.4961-1.1836-3.8203-1.5898-0.65625-0.20312-1.1055-0.8125-1.1016-1.5v-6.4062h-10.719v6.4062c0 0.6875-0.44922 1.293-1.1016 1.4922-1.3242 0.41016-2.6016 0.94531-3.8203 1.5938-0.60938 0.32422-1.3555 0.21094-1.8398-0.27344l-4.5195-4.5312-7.5781 7.5703 4.5312 4.5312c0.48438 0.48438 0.59766 1.2305 0.27734 1.8359-0.65234 1.2227-1.1836 2.5-1.5938 3.8203-0.19922 0.65625-0.80859 1.1055-1.4922 1.1055h-6.4102v6.1367h10.746c-0.011719-0.26172-0.027344-0.53125-0.027344-0.78125 0-4.5977 1.7383-9.0234 4.8711-12.391 3.1289-3.3633 7.418-5.4219 12.004-5.7539 4.582-0.33203 9.125 1.0859 12.707 3.9648 3.582 2.8789 5.9414 7.0117 6.6055 11.559 0.66016 4.5508-0.42578 9.1797-3.0391 12.961-2.6172 3.7812-6.5664 6.4336-11.055 7.418v11.148h1.4531v-6.4062c0-0.6875 0.44922-1.293 1.1016-1.4922 1.3242-0.41016 2.6016-0.94531 3.8203-1.5938 0.60938-0.32031 1.3555-0.21094 1.8398 0.27734l4.5195 4.5273 7.5781-7.5781-4.5312-4.5234v0.003906c-0.48828-0.48438-0.60156-1.2305-0.27734-1.8398 0.65234-1.2188 1.1836-2.5 1.5977-3.8203z"/>
                  <path d="m75 68.75c0-1.5781-0.59766-3.0977-1.6719-4.2539v1.1289c0 0.41406-0.16406 0.8125-0.45703 1.1055-0.29297 0.29297-0.69141 0.45703-1.1055 0.45703h-3.0156v7.8125c1.6562 0 3.2461-0.66016 4.418-1.832s1.832-2.7617 1.832-4.418z"/>
                  <path d="m82.25 63.008c0-0.023437-0.015625-0.046874-0.023438-0.066406-0.22656 0.13281-0.48047 0.20703-0.74219 0.21484-0.41406 0-0.8125-0.16406-1.1055-0.46094l-4.8281-4.8438c-0.73047 0.34766-1.4688 0.65625-2.2227 0.92578v1.8008c3.7227 2.082 5.5703 6.4141 4.4961 10.543-1.0781 4.1289-4.8086 7.0078-9.0742 7.0039v7.8125h3.0469v-3.75c0-0.69141 0.45703-1.3008 1.1211-1.5 0.84766-0.25 1.6641-0.58594 2.4453-1 0.60547-0.32031 1.3516-0.20703 1.8359 0.27734l2.6445 2.6367 4.3203-4.3203-2.6445-2.6445c-0.48047-0.48438-0.59375-1.2305-0.26953-1.8359 0.41797-0.77734 0.75391-1.5977 1.0078-2.4453 0.19922-0.66406 0.80859-1.1211 1.5-1.1211h3.7422v-6.0938h-3.75c-0.69531 0-1.3086-0.46094-1.5-1.1328z"/>
                  <path d="m68.75 49.695c3.6367-0.97656 6.7773-3.2812 8.7969-6.4609 2.0234-3.1797 2.7773-6.9961 2.1211-10.707-0.65625-3.707-2.6758-7.0352-5.668-9.3281-2.9883-2.2891-6.7266-3.3789-10.48-3.0469-3.75 0.32812-7.2422 2.0508-9.7852 4.8281-2.543 2.7812-3.9531 6.4102-3.9531 10.176 0 0.25 0.015625 0.51562 0.027344 0.78125h14.254c2.5898 0 4.6875 2.0977 4.6875 4.6875z"/>
                </g>
                </svg>
              </div>
              <div>
                <h2>Optimization</h2>
                <p>Using SEO, A/B testing, and analytics, we will optimize your campaign into a well oiled machine.</p>
              </div>
            </div>
          </div>
        </section>

        <Services page={'marketing'} />
      </main>
    </div>
  )
}
