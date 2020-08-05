import React, { useEffect } from 'react'

const Arrow = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const arrow = document.getElementById('arrow');
      arrow.addEventListener('click', (e) => {
        const section = window.location.hash;
      });
    }
  }, []);

  return <></>;
}

export default Arrow;