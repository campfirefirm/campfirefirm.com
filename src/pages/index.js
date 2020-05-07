import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import animation from "../images/animationw.gif"
import bg from "../images/bg.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Campfire Firm LLC" keywords={[`marketing`, `design`, `react`, `videography`, `cro`]} />
    <section id="section-1" style={{ backgroundImage: `url(${bg})` }}>
      <div class="content" style={{ color: 'white', textAlign: 'center' }}>
        <h1>Creative to tell your story</h1>
        <h2>Campfire Firm is a creative team of designers, developers, and video production experts who are ready to help tell your story.</h2>
      </div>
    </section>
    <section id="section-2">
      <div class="logo-container">
        {/* <Image /> */}
        <img src={animation} alt="Campfire Firm" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
