import React from 'react'

import laptop from './img/laptop.png'
import tomclimate from './img/tom-climate.gif'
import sugarscroll from './img/sugar-scroll.jpg'
import sugarex from './img/sugar-expand.jpg'
import flow from './img/flow.svg'
import './styles.scss';

const Web = () => (
  <section id="web">
    <h2>Web Development</h2>

    <div className="web-flow-container">
      <img id="web-flow" className="shadow" src={flow} alt="flow chart" />
    </div>
    <img id="web-laptop" src={laptop} alt="laptop" />

    <div className="sites-container">
      <div className="sites">
        <img className="site shadow"
          src={tomclimate} alt="TS2020 website"
        />
        <img className="site shadow"
          src={sugarscroll} alt="SugarCRM"
        />
        <img className="site shadow"
          src={sugarex} alt="SugarCRM"
        />
      </div>
    </div>

    <div className="content">
      <p>Running <b>Wordpress</b>? <b>Drupal</b>? Something custom? We can help! We have the expertise you need to get that project finished quickly.</p>
    </div>
  </section>
);

export default Web;