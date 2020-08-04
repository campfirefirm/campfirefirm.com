import React from 'react'

import laptop from './img/laptop.png'
import tomclimate from './img/tom-climate.gif'
import sugarscroll from './img/sugar-scroll.jpg'
import sugarex from './img/sugar-expand.jpg'
import flow from './img/flow.svg'

import './web.scss';

const Web = () => (
  <section
    id="web"
  >
    <h2 style={{
      color: '#323236',
    }}
    >Web Development</h2>

    <img id="web-flow" src={flow} alt="flow chart" />

    <img id="web-laptop" src={laptop} alt="laptop" />

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
  </section>
);

export default Web;