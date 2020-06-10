import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animation from "../images/animationw.gif"
import { Link } from "gatsby"
import map from "../images/papermap.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section style={{ marginBottom: '7rem' }}>
      <h1 style={ { paddingTop: '20px', textAlign: 'center' }}>404</h1>
      <p style={ { fontSize: '32px', textAlign: 'center' }}>Are you lost?</p>
      <p style={{ fontFamily: "Arial", fontSize: '32px' }}>(╯°□°)╯︵ ┻━┻</p>
      <p style={ { fontSize: '28px', lineHeight: '1.2', padding: '0 10px', textAlign: 'center' }}><Link to={'/'}>Find your way back to safety</Link> <span style={{ transform: 'rotate(-64deg)', display: 'inline-block' }}>&#10551;</span></p>
    </section>
    <section style={{ backgroundImage: `url(${map})` }}>
      <div style={{ maxWidth: `400px`, margin: `auto`, marginTop: '-10rem' }}>
        <img src={animation} alt="Campfire Firm" />
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
