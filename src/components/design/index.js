import React from 'react'

import bg from './img/bg.svg'
import tag from './img/tag.png'
import './design.scss';

const Design = () => (
  <section
    id="design"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >
    <img id="design-tag" src={tag} alt="tag" />
    <h2 style={{
      color: '#323236',
    }}
    >Design</h2>
  </section>
);

export default Design;