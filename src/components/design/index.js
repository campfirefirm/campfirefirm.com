import React from 'react'

import bg from './img/bg.svg'
import tag from './img/tag.png'
import cuptilt from './img/cup-tilt.png'
import cupstraw from './img/cup-straw.png'
import './styles.scss';

const Design = () => (
  <section
    id="design"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'repeat',
    }}
  >
    <img id="design-tag" src={tag} alt="tag" />
    <h2 style={{
      color: '#323236',
    }}
    >Design</h2>
    <img id="design-cup-straw" src={cupstraw} alt="cup" />
    <img id="design-cup-tilt" src={cuptilt} alt="cup" />
  </section>
);

export default Design;