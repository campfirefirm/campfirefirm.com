import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Scroller = () => {
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

      gsap.to('#arrow',
        {
          scrollTrigger: {
            scrub: true,
          },
          marginBottom: '-100%',
        }
      );

      gsap.to('#top .nav',
        {
          scrollTrigger: {
            scrub: true,
            end: 'top+=1000px',
          },
          marginTop: '-100px',
        }
      );

      /**
       * DESIGN ========================
       */


      /**
       * WEB ========================
       */

      gsap.from('#web-flow',
        {
          scrollTrigger: {
            scrub: true,
            trigger: '#web-flow',
            end: "top 30%",
          },
          transform: 'translate(-150%, -50%)',
        }
      );

      gsap.from('#web .sites-container',
        {
          scrollTrigger: {
            scrub: true,
            trigger: '#web .sites-container',
            end: "top 20%",
          },
          right: '-45%',
          top: '-10%',
        }
      );

      /**
       * VIDEO ========================
       */

      gsap.from('#video .video',
        {
          scrollTrigger: {
            scrub: true,
            trigger: '#video .video',
            end: "top center",
          },
          transform: 'scale(0.9)',
        }
      );

    }
  }, []);

  return <></>;
}

export default Scroller;