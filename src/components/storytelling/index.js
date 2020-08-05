import React from 'react'
import fire from '../../images/logos/animationb.gif'
import './styles.scss'

const Storytelling = () => (
  <section id="storytelling">
    <div className="content cols">
      <div className="col" style={{ zIndex: 1 }}>
        <h2>We’ll tell your story</h2>
        <p className="text">Campfire Firm is a creative team of experts in <b>design</b>, <b>video production</b>, <b>web development</b>, and <b>digital marketing</b> who are ready to help tell your story.</p>
        <p className="text">Unsure where to start?</p>
        <p>
          <a
            className="gradient-border btn"
            href={`mailto:hello@campfirefirm.com?subject=Looking for help`}
          >Let’s chat!</a>
        </p>
      </div>
      <div className="col">
        <div className="logo-container">
          <img
            src={fire}
            alt="Campfire Firm"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Storytelling;