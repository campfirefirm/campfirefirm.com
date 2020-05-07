import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animation from "../images/animation.gif"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={ { textAlign: 'center' }}>404</h1>
    <p style={ { textAlign: 'center' }}>Are you lost?</p>
    <p style={ { textAlign: 'center' }}><Link to={'/'}>Find your way back to safety.</Link></p>
    <SEO title="Campfire Firm LLC" keywords={[`marketing`, `design`, `react`, `videography`, `cro`]} />
    <div style={{ maxWidth: `400px`, margin: `auto` }}>
      {/* <Image /> */}
      <img src={animation} alt="Campfire Firm" />
    </div>
  </Layout>
)

export default NotFoundPage
