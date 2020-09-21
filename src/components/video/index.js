import React, { useState } from 'react'
import './styles.scss'
import ModalVideo from 'react-modal-video'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  color: #EEE;
  background-color: #3067A6;  // #F36850
  // border: 2px solid #AED3F4;
  border: none;
  padding: 8px 12px;

  animate: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #408ADE; // #EA513C
    border-color: #ddd;
  }
`;

const Video = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  React.useEffect(() => {
    if (!open) {
      setId(null);
    }
  }, [open]);

  React.useEffect(() => {
    if (id) {
      setOpen(true);
    }
  }, [id]);

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
          <p><b>Let’s start creating your video today!</b></p>
        </div>
        <div className="col">
          <p>Check out these examples:</p>
          <ul>
            <li>
              <Button onClick={ () => setId('456286137') }>Climate policy</Button>
            </li>
            <li>
              <Button onClick={ () => setId('283818650') }>Candidate campaigns</Button>
            </li>
            <li>
              <Button onClick={ () => setId('199230971') }>Broadcast TV ads</Button>
            </li>
            <li>
              <Button onClick={ () => setId('372215739') }>Local ballot measures</Button>
            </li>
            <li>
              <Button onClick={ () => setId('219768695') }>Animated videos</Button>
            </li>
            <li>
              <Button onClick={ () => setId('456292098') }>Digital ads</Button>
            </li>
            <li>
              <Button onClick={ () => setId('380062204') }>Live streams</Button>
            </li>
            <li>
              <Button onClick={ () => setId('381715174') }>And more...</Button>
            </li>
          </ul>
        </div>
      </div>

      <ModalVideo channel='vimeo' isOpen={ open } videoId={id} onClose={() => setOpen(false) } />
    </section>
  );
};

export default Video;