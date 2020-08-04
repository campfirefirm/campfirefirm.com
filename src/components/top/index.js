import React from 'react'

import mountains from "./mountains.jpg" // https://unsplash.com/photos/g30P1zcOzXo
import middle from "./midtree.png" // https://unsplash.com/photos/4igCpD-Lnfg
import trees from "./trees.png" // https://unsplash.com/photos/lCE9uRmh7b8

const Top = () => (
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
);

export default Top;