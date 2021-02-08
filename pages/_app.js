import '../styles/globals.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { GTMPageView } from 'utils'
import { useEffect } from 'react'
import Router from 'next/router'

function Site({ Component, pageProps }) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
        Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Site