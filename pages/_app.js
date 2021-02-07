import '../styles/globals.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'

function Site({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Site