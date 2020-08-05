import React from 'react'

import mountains from "./mountains.jpg" // https://unsplash.com/photos/g30P1zcOzXo
import middle from "./midtree.png" // https://unsplash.com/photos/4igCpD-Lnfg
import trees from "./trees.png" // https://unsplash.com/photos/lCE9uRmh7b8

import './styles.scss'

const Top = () => (
  <section id="top">
    <div className="scroller"
      id="top-mountains"
      data-speed={-0.9}
      style={{
        backgroundImage: `url(${mountains})`,
      }}
    ></div>

    <div className="scroller"
      id="top-middle"
      data-speed={0.2}
      style={{
        backgroundImage: `url(${middle})`,
      }}
    ></div>

    <div
      id="top-header-text"
      className="scroller"
      data-speed={-1.1}
    >
      <h1>CAMPFIRE FIRM</h1>
      <h2>Storytelling for the <br />digital age</h2>
    </div>

    <div className="scroller"
      id="top-front-trees"
      data-speed={1}
      style={{
        backgroundImage: `url(${trees})`,
      }}
    >
      <div className="black-after"></div>
    </div>

    <div className="nav">
      <a href="#video">Video</a> | <a href="#design">Design</a> | <a href="#web">Web</a>
    </div>

  </section>
);

export default Top;