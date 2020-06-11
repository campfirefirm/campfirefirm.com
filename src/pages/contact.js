import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animation from "../images/animationl.gif"
import contours from "../images/contours.png"
import { Link } from 'gatsby'

const ContactPage = () => {
  return (
  <Layout>
    <SEO title="Campfire Firm LLC Contact" keywords={[`marketing`, `design`, `development`, `videography`, `cro`, `analytics`, `progressive`]} />
    <section id="section-1" style={{ backgroundImage: `url(${contours})`, backgroundPositionY: "50%", paddingTop: '2rem' }}>
      
      <div className="content" style={{ paddingBottom: '0' }}>
        <h2>&#8212; Reach out to us! &#8212;</h2>
        <p><Link to="/">Head back when you're finished</Link></p>
      </div>
      <div className="content cols" style={{ paddingTop: '0' }}>
        <div className="col">
          <div className="logo-container">
            <img src={animation} alt="Campfire Firm" />
          </div>
        </div>
        <div className="col form">
          <iframe title="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSciY_K3LjsIaY1Csi8lKRmvR7UTTB5SbGPIlImuP7laptPb6Q/viewform?embedded=true" width="640" height="682" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </section>

  </Layout>
)};

export default ContactPage
