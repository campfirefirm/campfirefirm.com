import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import animation from "../images/animation.gif"

const IndexPage = () => (
  <Layout>
    <SEO title="Campfire Firm LLC" keywords={[`marketing`, `design`, `react`, `videography`, `cro`]} />
    <div style={{ maxWidth: `400px`, margin: `auto` }}>
      {/* <Image /> */}
      <img src={animation} alt="Campfire Firm" />
    </div>
  </Layout>
)

export default IndexPage
