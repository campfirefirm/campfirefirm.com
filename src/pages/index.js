import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import animation from "../images/fire.png" // https://unsplash.com/photos/DUXACn8tgp4
import bg3 from "../images/bg3.jpg"
// import cf from "../images/logos/campfirefirm.svg"
import { Link } from 'gatsby'

// sections
import Top from '../components/top'
import Storytelling from '../components/storytelling'
import Video from '../components/video'
import Design from '../components/design'
import Web from '../components/web'

const Keys = React.lazy(() =>
  import('../components/interactions/keys')
);

const Scroller = React.lazy(() => 
  import('../components/interactions/scroll')
);

const IndexPage = () => {
  const ssr = typeof window === `undefined`;

  return (
  <Layout>
    <SEO title="Creative Agency" keywords={[`marketing`, `design`, `development`, `videography`, `cro`, `analytics`, `progressive`]} />

    {!ssr && (
      <React.Suspense fallback={<div />}>
        <Keys />
        <Scroller />
      </React.Suspense>
    )}

    <div id="arrow">
      <svg style={{ filter: "drop-shadow(1px 1px 3px rgba(0,0,0, 0.6))" }} fill="#fff" height="100pt" viewBox="0 0 100 100" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m2.5 31.301c0-2.6016 1-5.1016 2.8984-7.1016 3.8984-3.8984 10.301-3.8984 14.199 0l30.402 30.301 30.398-30.398c3.8984-3.8984 10.301-3.8984 14.199 0 3.8984 3.8984 3.8984 10.301 0 14.199l-37.496 37.5c-1.8984 1.8984-4.3984 2.8984-7.1016 2.8984-2.6992 0-5.1992-1.1016-7.1016-2.8984l-37.5-37.402c-1.8984-2-2.8984-4.5977-2.8984-7.0977z"/></svg>
    </div>

    <section id="banner" className="hide"></section>

    <Top />
    <Storytelling />
    <Video />
    <Design />
    <Web />

    {/* <section style={{ background: '#598C6E', color: '#fff' }}> */}
    <section>
      <div className="content">
        <h2>&#8212; About us &#8212;</h2>
        <p>We named our studio Campfire because our company culture extends to our working relationships - the feeling of friends around a campfire brainstorming, laughing and developing the best ideas in this neck of the woods.</p>
      </div>
    </section>


    <section style={{ backgroundImage: `url(${bg3})`, backgroundPositionY: "50%", color: "#fff" }}>
    {/* <section style={{ backgroundImage: `url(${contours})`, backgroundPositionY: "50%" }}> */}
      <div className="content">
        <h2>&#8212; Reach out to us! &#8212;</h2>
        <p><Link style={{ color: '#fff' }} to={`contact`}>Contact us today</Link></p>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} Campfire Firm LLC
      </footer>
    </section>


    {/* <section style={{ backgroundColor: '#E4FAED' }}>
      <div className="content cols">
        <div className="col profile">
          <FontAwesomeIcon icon={faPencilRuler} size={'4x'} color={'#669F7F'} />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Design</p>
        </div>
        <div className="col profile">
          <FontAwesomeIcon icon={faYoutube} size={'4x'} color={'#669F7F'} />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Video Production</p>
        </div>
        <div className="col profile">
          <FontAwesomeIcon icon={faCode} size={'4x'} color={'#669F7F'} />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Web Development</p>
        </div>
      </div>
    </section> */}



  </Layout>
)};

export default IndexPage
