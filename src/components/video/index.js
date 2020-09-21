import React, { useState } from 'react'
import './styles.scss'
import ModalVideo from 'react-modal-video'

const videos = [
  '456286137',
  '283818650/e7f7aaa9f1',
  '199230971',
  '372215739/4a0851b86a',
  '219768695',
  '456292098/af2715d8a7',
  '380062204',
  '381715174/fe0c564563',
];

const Video = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  return (
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
            <li><button onClick={ () => { setId('456286137'); setOpen(true); } }>Climate policy</button></li>
            <li><button onClick={ () => { setId('283818650/e7f7aaa9f1'); setOpen(true); } }>Candidate campaigns</button></li>
            <li><button onClick={ () => { setId('199230971'); setOpen(true); } }>Broadcast TV ads</button></li>
            <li><button onClick={ () => { setId('372215739/4a0851b86a'); setOpen(true); } }>Local ballot measures</button></li>
            <li><button onClick={ () => { setId('219768695'); setOpen(true); } }>Animated videos</button></li>
            <li><button onClick={ () => { setId('456292098/af2715d8a7'); setOpen(true); } }>Digital ads</button></li>
            <li><button onClick={ () => { setId('380062204'); setOpen(true); } }>Live streams</button></li>
            <li><button onClick={ () => { setId('381715174/fe0c564563'); setOpen(true); } }>And more...</button></li>
          </ul>
        </div>
      </div>

      { videos.map(video => (
        <ModalVideo channel='vimeo' isOpen={ videos.indexOf(id) >= 0 && open } videoId={video} onClose={() => setOpen(false) } />
      ))}
    </section>
  );
};

export default Video;