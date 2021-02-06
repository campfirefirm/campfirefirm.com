import styles from './Selector.module.scss'
import { useState, useEffect } from 'react'

export default function Selector({ tags, videos }) {
  const [activeTag, setActiveTag] = useState('all');
  const [watch, setWatch] = useState(null);
  const [visibleVideos, setVisibleVideos] = useState(videos);

  const handler = (tag) => {
    setActiveTag(tag);

    if (tag === 'all') {
      return setVisibleVideos(videos);
    }

    const _new = [];
    videos.map(v => {
      if (v.tags.indexOf(tag) >= 0) {
        _new.push(v);
      }
    });

    const tmp = _new.sort((a, b) => a.priority > b.priority)
    setVisibleVideos(tmp);
  }

  useEffect(() => {
    window.addEventListener('keydown', (k) => {
      // escape key
      if (k.keyCode === 27) {
        setWatch(null);
      }
    })
  }, [])

  return (
    <>
      <ul className={styles.tags}>
        {tags.map(tag =>
          <li data-active={tag === activeTag} key={tag} onClick={() => handler(tag)}>{tag[0].toUpperCase() + tag.slice(1)}</li>
        )}
      </ul>

      <ul className={styles.blocks}>
        {videos.map( video => 
          <li key={video.id} data-display={visibleVideos.indexOf(video) >= 0}>
            <div className={styles.wrapper}>
              <div className={styles.clickInterceptor} onClick={() => setWatch(video.id)}></div>
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?controls=0`}
                width="640"
                height="360"
                frameBorder="0"
                loading="lazy"
                allow="fullscreen"
              ></iframe>
            </div>
            {video.title && (
              <p>{video.title}</p>
            )}
          </li>
        )}
        <li key={'extra'}></li>
      </ul>

      { watch && (
        <div className={styles.modal} onClick={() => setWatch(null) }>
          <div className={styles.modalContent}>
            <iframe
                src={`https://player.vimeo.com/video/${watch}?controls=1&autoplay=1`}
                width="640"
                height="360"
                frameBorder="0"
                allow="fullscreen,autoplay"
                loading="lazy"
              ></iframe>
          </div>
        </div>
      )}
    </>
  )
}
