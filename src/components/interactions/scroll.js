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

  return <></>;
}

export default Scroller;