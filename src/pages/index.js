import React, { useEffect } from "react"
import tinykeys from "tinykeys"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import cfanim from "../images/campsimple.svg"
// import animation from "../images/fire.png" // https://unsplash.com/photos/DUXACn8tgp4
import fire from '../images/logos/animation.gif'
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
import tomclimate from "../images/web/tom-climate.gif"
import sugarscroll from "../images/web/sugar-scroll.jpg"
import sugarex from "../images/web/sugar-expand.jpg"
import mountains from "../images/mountains.jpg" // https://unsplash.com/photos/g30P1zcOzXo
import middle from "../images/midtree.png" // https://unsplash.com/photos/4igCpD-Lnfg
import trees from "../images/trees.png" // https://unsplash.com/photos/lCE9uRmh7b8
import cf from "../images/logos/campfirefirm.svg"
import { Link } from 'gatsby';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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

      // gsap.from('.logo-container',
      //   {
      //     scrollTrigger: {
      //       scrub: true,
      //       start: "top top",
      //       end: "center center",
      //     },
      //     marginRight: '-10rem',
      //   }
      // );

      ScrollTrigger.create({
        trigger: "#video-container",
        start: "top top",
        end: "bottom bottom",
        // end: "bottom top",
        pin: ".video-wrapper",
      });


      const sparksVideo = document.getElementById('sparks-video');
      sparksVideo.playbackRate = 0.6;

      // ScrollTrigger.create({
      //   trigger: ".logo-container",
      //   start: "center bottom",
      //   // endTrigger: "bottom top",
      //   // end: "bottom 50%+=100px",
      //   end: "bottom top",
      //   animation: gsap.fromTo(".logo-container",
      //     { marginRight: '-10rem' },
      //     { marginRight: 0 },
      //   ),
      // });
    }
  }, []);

  return (
  <Layout>
    <SEO title="Creative Agency" keywords={[`marketing`, `design`, `development`, `videography`, `cro`, `analytics`, `progressive`]} />
    
    <div id="arrow">
      <svg fill="#fff" height="100pt" viewBox="0 0 100 100" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m2.5 31.301c0-2.6016 1-5.1016 2.8984-7.1016 3.8984-3.8984 10.301-3.8984 14.199 0l30.402 30.301 30.398-30.398c3.8984-3.8984 10.301-3.8984 14.199 0 3.8984 3.8984 3.8984 10.301 0 14.199l-37.496 37.5c-1.8984 1.8984-4.3984 2.8984-7.1016 2.8984-2.6992 0-5.1992-1.1016-7.1016-2.8984l-37.5-37.402c-1.8984-2-2.8984-4.5977-2.8984-7.0977z"/></svg>
    </div>
    
    <section id="banner" className="hide"></section>
    <section
      style={{ 
        positon: 'relative',
        height: '100vh',
        maxHeight: '100vh',
        color: '#fff',
        overflowY: 'hidden',
        background: '#000',
        justifyContent: 'flex-start',
      }}
    >

      <div className="scroller"
        id="mountains"
        data-speed={-0.9}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundImage: `url(${mountains})`,
          backgroundSize: `cover`,
          height: '100vh',
          width: '100vw',
          imageRendering: "pixelate",
        }}
      ></div>

      <div className="scroller"
        data-speed={0.2}
        style={{
          position: 'absolute',
          top: '20%',
          left: '0',
          backgroundImage: `url(${middle})`,
          backgroundSize: `cover`,
          backgroundPositionY: `0%`,
          backgroundPositionX: `50%`,
          height: '100%',
          width: '100vw',
        }}
      ></div>

      <div
        id="header-text"
        className="scroller"
        data-speed={-1.1}
      >
        <h1>CAMPFIRE FIRM</h1>
        <h2>Storytelling for the <br />digital age</h2>
      </div>

      {/* <img
        alt="Campfire Firm LLC"
        className="scroller"
        data-speed={-0.7}
        src={cf}
        style={{
          // position: 'absolute',
          // top: '20%',
          width: '50%',
          maxWidth: '400px',
          minWidth: '350px',
          filter: 'drop-shadow(3px 3px 10px #FFD9B1)',
        }}
      /> */}

      <div className="scroller"
        id="front-trees"
        data-speed={1}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundImage: `url(${trees})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `contain`,
          backgroundPositionY: `100%`,
          backgroundPositionX: `100%`,
          height: '100%',
          width: '100vw',
        }}
      >
        <div style={{
          backgroundColor: '#000',
          display: 'block',
          width: '100%',
          height: '300vh',
          position: 'absolute',
          top: '100%',
          left: '0',
        }}></div>
      </div>

    </section>

    <section
      id="storytelling"
      style={{
        background: '#000',
        zIndex: 1,
        height: '100vh',
        paddingBottom: '3rem',
        justifyContent: 'flex-end',
      }}>
      <div className="content cols">
        <div className="col" style={{ zIndex: 1 }}>
          <h2>We’ll tell your story</h2>
          <p className="text">Campfire Firm is a creative team of experts in <b>design</b>, <b>video production</b>, <b>web development</b>, and <b>digital marketing</b> who are ready to help tell your story.</p>
          <p className="text">Unsure what you need? We can help with that to.</p>
          <p>
            <Link
              style={{
                color: '#000',
                background: '#F26950',
                borderRadius: '5px',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                fontWeight: 900,
              }}
              to={`contact`}
            >Let's chat</Link>
          </p>
        </div>
        <div className="col">
          {/* <div className="logo-container">
            <img
              style={{ marginLeft: '-5rem', minWidth: '130%', marginTop: '-3rem' }}
              src={fire}
              alt="Campfire Firm"
            />
          </div> */}
            {/* <div className="video-container" style={{
              // width: '70vw',
              marginLeft: '2rem',
              marginTop: '-3rem',
              // minHeight: '600px',
              // overflow: 'hidden',
              // position: 'absolute',
              // bottom: 0,
              // right: 0,
            }}>
              <video style={{ 
                width: '100%',
                maxHeight: '100%',
                position: 'absolute',
                padding: 0,
                margin: 0,
                bottom: 0,
                right: 0,
                zIndex: 0,
              }}
                loop muted autoPlay playsInline id="top-video" src="../../sparks2.mp4">
                Your browser does not support the video tag.
              </video>
            </div> */}
        </div>
      </div>


      <div className="video-container" style={{
          width: '70vw',
          minHeight: '600px',
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}>
          <video
          style={{ 
            width: '100%',
            maxHeight: '100%',
            position: 'absolute',
            padding: 0,
            margin: 0,
            bottom: 0,
            right: 0,
            zIndex: 0,
          }}
            loop muted autoPlay playsInline id="sparks-video" src="../../sparks.mp4">
            Your browser does not support the video tag.
          </video>
        </div>
    </section>

    <section
      style={{
        background: '#000',
        width: '100vw',
        height: '100vh',
      }}
    >
      <h2>Video Production</h2>
    </section>


    <section
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
    </section>


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

    <section style={{
      backgroundImage: `url(${bg2})`,
      backgroundPositionY: "50%",
      paddingBottom: '4rem',
    }}>
    {/* <section style={{ paddingTop: '2rem', background: `#FFF`, paddingBottom: '6rem' }}>  */}
      <div className="content">
        <h2>&#8212; Web Development and Design &#8212;</h2>
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
