import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import bg3 from "../images/bg3.jpg"
import { Link } from 'gatsby'

// sections
import Top from '../components/top'
import Storytelling from '../components/storytelling'
import Video from '../components/video'
import Design from '../components/design'
import Web from '../components/web'

const Keys = React.lazy(() => import('../components/interactions/keys'));
const Scroller = React.lazy(() => import('../components/interactions/scroll'));

const IndexPage = () => {
  const ssr = typeof window === `undefined`;

  return (
  <Layout>
    <SEO title="Creative Agency" keywords={[
      `marketing`,
      `design`,
      `development`,
      `videography`,
      `cro`,
      `analytics`,
      `progressive`
    ]} />

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

    <section>
      <div className="content" style={{ padding: '10rem 0' }}>
        <h2>About us</h2>
        <p>We named our studio Campfire because our company culture extends to our working relationships - the feeling of friends around a campfire brainstorming, laughing and developing the best ideas in this neck of the woods.</p>
      </div>
    </section>

    <section style={{ backgroundImage: `url(${bg3})`, backgroundPositionY: "50%", color: "#fff" }}>
      <div className="content">
        <h2>Reach out to us!</h2>
        <p><Link className="gradient-border btn" to={`contact`}>Contact us today</Link></p>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} Campfire Firm LLC
      </footer>
    </section>

  </Layout>
)};

export default IndexPage
