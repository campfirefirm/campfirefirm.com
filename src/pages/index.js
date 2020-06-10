import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animation from "../images/animationl.gif"
import contours from "../images/contours.png"
import design from "../images/design.png"
import kag from "../images/kag.png"
// import night from "../images/night.jpg"

// import image from "../images/fire.jpg"
import parleypro from "../images/parleypro.png"
import ts2020 from "../images/tom2020.png"
import givegreen from "../images/givegreen.svg"
// import map from "../images/papermap.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencilRuler, faCode } from '@fortawesome/free-solid-svg-icons'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { RoughNotation } from "react-rough-notation";

const IndexPage = () => {
  return (
  <Layout>
    <SEO title="Campfire Firm LLC" keywords={[`marketing`, `design`, `development`, `videography`, `cro`, `analytics`, `progressive`]} />
    <section id="section-1" style={{ backgroundImage: `url(${contours})`, backgroundPositionY: "50%", paddingTop: '2rem' }}>
      <div className="content cols" style={{ marginBottom: '-8rem' }}>
        <div className="col">
          <h1>Content for causes
            <span class="br">
              that matter
              {/* <RoughNotation
                type="highlight"
                color="#FCF3B9"
                show={true}
              >that matter</RoughNotation> */}
            </span>
          </h1>
          <p>Campfire Firm is a creative team of experts in design, video production, and web development who are ready to help tell your story.</p>
        </div>
        <div className="col">
          <div className="logo-container">
            <img src={animation} alt="Campfire Firm" />
          </div>
        </div>
      </div>
    </section>


    <section style={{ paddingTop: '2rem' }}>
      <div className="content cols">
        <div className="col client">
          <img src={ts2020} alt="TOM2020" />
        </div>
        <div className="col client">
          <img src={givegreen} alt="GiveGreen" />
        </div>
        <div className="col client">
          <img src={parleypro} alt="Parley Pro" />
        </div>
      </div>
    </section>


    {/* F5FFFD */}
    <section> 
      <div className="content">
        <h2>Video Production</h2>
          <div className="video shadow">
            <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/PaorFER64HQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>
    </section>


    <section style={{ margin: 0 }}>
      <div className="content" style={{ padding: 0 }}>
        <h2>Design</h2>
      </div>
    </section>
    <section style={{ backgroundImage: `url(${design})`, minHeight: '400px' }}>
      <div className="content"></div>
    </section>


    <section style={{ paddingTop: '2rem' }}> 
      <div className="content">
        <h2>Web Development</h2>
        <div style={{ maxWidth: '768px' }}>
          <div className="shadow">
            <img src={kag} alt="TS2020 website" />
          </div>
        </div>
      </div>
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
