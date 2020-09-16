import React, { useEffect } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import './styles.scss';
import styled from 'styled-components';

const VideoContainer = styled.div`
  flex-direction: row;
  justify-content: space-around;
`;

const videos = [
  'https://www.vimeo.com/456286137',
  'https://www.vimeo.com/283818650/e7f7aaa9f1',
  'https://www.vimeo.com/199230971',
  'https://www.vimeo.com/372215739/4a0851b86a',
  'https://www.vimeo.com/219768695',
  'https://www.vimeo.com/456292098/af2715d8a7',
  'https://www.vimeo.com/381715174/fe0c564563',
];

const VideoCard = (props) => {
  const { src } = props;

  return (
    <Vimeo
      video={src}
      showPortrait={false}
      showTitle={false}
      showByline={false}
      // height={'200px'}
      style={{
        margin: '0 1rem',
        maxWidth: '100%',
      }}
    />
  );
}

const StyledVideo = styled(VideoCard)``;

const Carousel = () => {
  return (
    <VideoContainer className="content cols" style={{ overflowX: 'scroll', padding: 0, margin: 0 }}>
      {videos.map( video => (
        <StyledVideo src={video} />
      ))}
    </VideoContainer>
  )
}

const Video = () => {
  useEffect(() => {
  }, []);

  return (
    <section id="video">
      <div className="content top">
        <h2>Video</h2>
        <div className="video shadow">
          <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/bVBWmBj1fQo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        {/* <Carousel /> */}
      </div>
      <div className="content cols">
        <div className="col"><VideoCard src='https://www.vimeo.com/456286137' /></div>
        <div className="col"><VideoCard src='https://www.vimeo.com/283818650/e7f7aaa9f1' /></div>
      </div>
      <div className="content cols">
        <div className="col"><VideoCard src='https://www.vimeo.com/199230971' /></div>
        <div className="col"><VideoCard src='https://www.vimeo.com/372215739/4a0851b86a' /></div>
      </div>
      <div className="content cols">
      <div className="col"><VideoCard src='https://www.vimeo.com/456292098/af2715d8a7' /></div>
        <div className="col"><VideoCard src='https://www.vimeo.com/219768695' /></div>
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
};

export default Video;