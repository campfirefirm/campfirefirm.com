import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animation from "../images/animationlb.gif"
import contours from "../images/contours.png"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
import design from "../images/design.png"
import tomclimate from "../images/tom-climate.gif"
import sugarscroll from "../images/sugar-scroll.jpg"
import sugarex from "../images/sugar-expand.jpg"
import stars from "../images/stars.jpg"

import parleypro from "../images/parleypro.png"
import ts2020 from "../images/tom2020.png"
import givegreen from "../images/givegreen.svg"

import { Link } from 'gatsby';

const IndexPage = () => {
  return (
  <Layout>
    <SEO title="Campfire Firm LLC" keywords={[`marketing`, `design`, `development`, `videography`, `cro`, `analytics`, `progressive`]} />
    <section id="section-1" style={{ 
      backgroundImage: `url(${stars})`,
      backgroundPositionY: "100%",
      paddingTop: '4rem',
      color: '#fff',
    }}>
      <div className="content cols" style={{ marginBottom: '-8rem' }}>
        <div className="col" style={{ marginTop: '-6rem' }}>
          <h1>Content for causes
            <span class="br">
              that matter
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


    <section style={{ marginBottom: '-2rem' }}>
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
    <section style={{ backgroundImage: `url(${contours})`, backgroundPositionY: "50%" }}>
    {/* <section> */}
      <div className="content">
        <h2>&#8212; Video Production &#8212;</h2>
          <div className="video shadow">
            <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/bVBWmBj1fQo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>
    </section>

    <section style={{ 
      background: `#F7C4C7`, 
      backgroundPositionY: "0%", 
      maxHeight: '100px',
      color: '#201C4D', 
      paddingTop: '6rem',
    }}>
      <div className="content" style={{
        margin: '0',
        padding: '0',
      }}>
        <h2>&#8212; Design &#8212;</h2>
      </div>
    </section>

    <section style={{ 
      background: `url(${design}) #F7C4C7`, 
      backgroundPositionY: "0%", 
      minHeight: '600px', 
      color: '#201C4D', 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      paddingTop: '0',
      alignItems: 'flex-start',
    }}>
      <div className="content" />
    </section>


    <section style={{ backgroundImage: `url(${bg2})`, backgroundPositionY: "50%", paddingBottom: '4rem' }}>
    {/* <section style={{ paddingTop: '2rem', background: `#FFF`, paddingBottom: '6rem' }}>  */}
      <div className="content">
        <h2>&#8212; Web Development &#8212;</h2>
        <div style={{ position: 'relative', zIndex: 0, width: '100%', marginTop: '1rem' }}>
          <img className="shadow"
            src={tomclimate} alt="TS2020 website"
            style={{ 
              zIndex: 4, 
              position: 'relative', 
              marginRight: '30%' }} 
          />
          <img className="shadow"
            src={sugarscroll} alt="Keep America Great"
            style={{ 
              position: 'absolute', 
              top: '40px', 
              left: '15%', 
              marginRight: '15%', 
              zIndex: 3}} 
          />
          <img className="shadow"
            src={sugarex} alt="Keep America Great"
            style={{ 
              position: 'absolute', 
              top: '80px', 
              left: '30%', 
              zIndex: 2 }} 
          />
        </div>
      </div>
    </section>


    {/* <section style={{ background: '#598C6E', color: '#fff' }}> */}
    <section>
      <div className="content">
        <h2>&#8212; About us &#8212;</h2>
        <p>We named our studio Campfire because that's the vibe we wanted to attain in our working relationships - friends around a campfire brainstorming, laughing and developing the best ideas in this neck of the woods.</p>
        <p>We're like the three elements that make a fire: oxygen, heat, and fuel.</p>
        <p><b>Let's work together to ignite your vision to life!</b></p>
      </div>
    </section>


    <section style={{ backgroundImage: `url(${bg3})`, backgroundPositionY: "50%", color: "#fff" }}>
    {/* <section style={{ backgroundImage: `url(${contours})`, backgroundPositionY: "50%" }}> */}
      <div className="content">
        <h2>&#8212; Reach out to us! &#8212;</h2>
        <p><Link style={{ color: '#fff' }} to={`contact`}>Contact us today</Link></p>
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