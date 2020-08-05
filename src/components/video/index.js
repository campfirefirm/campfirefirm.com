import React from 'react'
import './styles.scss';

const Video = () => (
  // <section
  //   id="video-container"
  //   style={{
  //     width: '100vw',
  //     height: '200vh',
  //     overflow: 'hidden',
  //   }}
  // >
  //   <div className="video-wrapper" style={{
  //     width: '100vw',
  //     height: '100vh',
  //     overflow: 'hidden',
  //   }}>
  //     <video style={{ 
  //       minWidth: '100vw',
  //       minHeight: '100vh',
  //       position: 'absolute',
  //       padding: 0,
  //       margin: 0,
  //       top: 0,
  //       left: 0,
  //       zIndex: 0,
  //     }}
  //       loop muted autoPlay playsInline id="top-video" src="../../video.mp4">
  //       Your browser does not support the video tag.
  //     </video>
  //   </div>
  //   <div className="content">
  //     <div className="col">
  //       <h2>Video Production</h2>
  //     </div>
  //   </div>
  // </section>

  <section id="video">
    <div className="content top">
      <h2>Video</h2>
      <div className="video shadow">
        <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/bVBWmBj1fQo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
    <div className="content cols">
      <div className="col">
        <p>With over a decade of production experience Campfire is ready to help you promote your product, campaign, or cause. From script to final video - we’ll be with you every step of the way.</p>
        <p><b>Let’s get started on your video today!</b></p>
      </div>
      <div className="col">
        <p>We have experience with:</p>
        <ul>
          <li>Policy rollouts</li>
          <li>Candidate campaigns</li>
          <li>Ballot measures</li>
          <li>Animated videos</li>
          <li>Digital ads</li>
          <li>Live Streams</li>
          <li>And more... </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Video;