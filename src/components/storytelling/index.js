import React from 'react'
import fire from '../../images/logos/animationb.gif'

const Storytelling = () => (
  <section
    id="storytelling"
    style={{
      background: '#000',
      zIndex: 1,
      height: '100vh',
      paddingBottom: '3rem',
      justifyContent: 'flex-end',
    }}>
    <div className="content cols">
      <div className="col" style={{ zIndex: 1 }}>
        <h2>We’ll tell your story</h2>
        <p className="text">Campfire Firm is a creative team of experts in <b>design</b>, <b>video production</b>, <b>web development</b>, and <b>digital marketing</b> who are ready to help tell your story.</p>
        <p className="text">Unsure where to start?</p>
        <p>
          <a
            className="gradient-border"
            style={{
              color: '#fff',
              // background: '#6aa684',
              textShadow: '0px 1px 5px rgba(0,0,0, 0.6)',
              background: 'transparent',
              borderRadius: '5px',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              fontWeight: 900,
            }}
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