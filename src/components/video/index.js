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
    <div className="content">
      <h2 style={{ color: '#F5F5F9' }}>Video</h2>
      <div className="video shadow">
        <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/bVBWmBj1fQo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  </section>
);

export default Video;