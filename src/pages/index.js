import React, { useEffect } from "react"
import tinykeys from "tinykeys"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import animation from "../images/fire.png" // https://unsplash.com/photos/DUXACn8tgp4
import bg3 from "../images/bg3.jpg"
// import cf from "../images/logos/campfirefirm.svg"
import { Link } from 'gatsby'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// sections
import Top from '../components/top'
import Storytelling from '../components/storytelling'
import Design from '../components/design'
import Web from '../components/web'

const IndexPage = () => {
  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a Enter": () => {
        //
        const wf = document.createElement('script');
        wf.src = 'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        document.body.appendChild(wf);
        wf.onload = () => {
          if (window.WebFont) {
            window.WebFont.load({
              google: {
                families: ['VT323']
              }
            });

            document.body.style.fontFamily = 'VT323';
            const els = document.querySelectorAll('*');
            els.forEach((e) => e.style.fontFamily = 'VT323');
          }
        };
      },
    });
    return () => {
      unsubscribe()
    };
  }, []);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);

      gsap.to(".scroller", {
        scrollTrigger: {
          scrub: true
        }, 
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none",
      });

      gsap.from('.logo-container',
        {
          scrollTrigger: {
            scrub: true,
            start: "top top",
            end: "center center",
          },
          marginRight: '-10rem',
        }
      );

      /**
       * DESIGN ========================
       */

      // tag
      gsap.from('#design-tag',
        {
          scrollTrigger: {
            scrub: true,
            start: "top top",
            end: "center center",
          },
          marginTop: '-4rem',
        }
      );


      /**
       * WEB ========================
       */

      // // tag
      // gsap.from('#web .sites',
      //   {
      //     scrollTrigger: {
      //       scrub: true,
      //       start: "top top",
      //       end: "center center",
      //       pint: "#web",
      //     },
      //     marginRight: '-10%',
      //   }
      // );

      /**
       * VIDEO ========================
       */

      ScrollTrigger.create({
        trigger: "#video-container",
        start: "top top",
        end: "bottom bottom",
        // end: "bottom top",
        pin: ".video-wrapper",
      });
    }
  }, []);

  return (
  <Layout>
    <SEO title="Creative Agency" keywords={[`marketing`, `design`, `development`, `videography`, `cro`, `analytics`, `progressive`]} />

    <div id="arrow">
      <svg style={{ filter: "drop-shadow(1px 1px 3px rgba(0,0,0, 0.6))" }} fill="#fff" height="100pt" viewBox="0 0 100 100" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m2.5 31.301c0-2.6016 1-5.1016 2.8984-7.1016 3.8984-3.8984 10.301-3.8984 14.199 0l30.402 30.301 30.398-30.398c3.8984-3.8984 10.301-3.8984 14.199 0 3.8984 3.8984 3.8984 10.301 0 14.199l-37.496 37.5c-1.8984 1.8984-4.3984 2.8984-7.1016 2.8984-2.6992 0-5.1992-1.1016-7.1016-2.8984l-37.5-37.402c-1.8984-2-2.8984-4.5977-2.8984-7.0977z"/></svg>
    </div>

    <section id="banner" className="hide"></section>

    <Top />
    <Storytelling />
    <Design />
    <Web />

    {/* <section
      id="video-container"
      style={{
        width: '100vw',
        height: '200vh',
        overflow: 'hidden',
      }}
    >
      <div className="video-wrapper" style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}>
        <video style={{ 
          minWidth: '100vw',
          minHeight: '100vh',
          position: 'absolute',
          padding: 0,
          margin: 0,
          top: 0,
          left: 0,
          zIndex: 0,
        }}
          loop muted autoPlay playsInline id="top-video" src="../../video.mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <div className="col">
          <h2>Video Production</h2>
        </div>
      </div>
    </section> */}


    {/* F5FFFD */}
    {/* <section style={{ backgroundImage: `url(${contours})`, backgroundPositionY: "50%" }}> */}
    {/* <section> */}
      {/* <div className="content">
        <h2>&#8212; Video Production &#8212;</h2>
          <div className="video shadow">
            <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/bVBWmBj1fQo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
      </div>
    </section> */}

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
