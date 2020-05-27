import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animation from "../images/animationws.gif"
import bg from "../images/contours.png"
// import image from "../images/fire.jpg"
import parleypro from "../images/parleypro.png"
import ts2020 from "../images/tom2020.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faCode } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="Campfire Firm LLC" keywords={[`marketing`, `design`, `development`, `react`, `videography`, `cro`]} />
    <section id="section-1" style={{ backgroundImage: `url(${bg})` }}>
      <div class="content" style={{ textAlign: 'center' }}>
        <h1>Creative to tell your story</h1>
        <div class="logo-container">
          <img src={animation} alt="Campfire Firm" />
        </div>
      </div>
    </section>
    <section>
      <div class="content cols">
        <div class="col client">
          <img src={ts2020} alt="TOM2020" />
        </div>
        <div class="col client">
          <img src={parleypro} alt="Parley Pro" />
        </div>
      </div>
    </section>
    <section style={{ fontWeight: '700', backgroundColor: '#669F7F', color: '#FFF' }}>
      <div class="content cols" style={{ textAlign: 'center' }}>
        <div class="col">
          <p style={{ fontSize: '1.6rem' }}>Campfire Firm is a creative team of experts in design, web development and video production who are ready to help tell your story.</p>
        </div>
        {/* <div class="col">
          <img class="shadow" src={image} alt="Fire" />
        </div> */}
      </div>
    </section>
    <section>
      <div class="content cols">
        <div class="col profile">
          <FontAwesomeIcon icon={faPencilRuler} size={'4x'} color={'#669F7F'} />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Design</p>
        </div>
        <div class="col profile">
          <FontAwesomeIcon icon={faYoutube} size={'4x'} color={'#669F7F'} />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Video Production</p>
        </div>
        <div class="col profile">
          <FontAwesomeIcon icon={faCode} size={'4x'} color={'#669F7F'} />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Web Development</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
