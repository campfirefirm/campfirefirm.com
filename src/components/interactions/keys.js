import React, { useEffect } from 'react'
import tinykeys from 'tinykeys'

const Keys = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      let unsubscribe = tinykeys(window, {
        "ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a Enter": () => {
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
              if (!els || els.length === 0) return;
              els.forEach((e) => e.style.fontFamily = 'VT323');
            }
          };
        },
      });
      return () => {
        unsubscribe()
      };
    }
  }, []);

  return <></>;
}

export default Keys;