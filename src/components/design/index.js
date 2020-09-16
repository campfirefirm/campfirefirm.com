import React from 'react'

import bg from './img/bg.svg'
import stationary from './img/design.png'
// import cuptilt from './img/cup-tilt.png'
// import cupstraw from './img/cup-straw.png'
import './styles.scss';

const Design = () => (
  <section
    id="design"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'repeat',
    }}
  >
    <img id="design-stationary" src={stationary} alt="stationary" loading="lazy" />
    <h2>Design</h2>
    <ul>
      <li>Ads</li>
      <li>Reports</li>
      <li>Brochures</li>
      <li>Branding</li>
      <li>And more!</li>
    </ul>
    {/* <img id="design-cup-straw" src={cupstraw} alt="cup" />
    <img id="design-cup-tilt" src={cuptilt} alt="cup" /> */}
  </section>
);

export default Design;