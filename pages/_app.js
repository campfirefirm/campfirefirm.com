import '../styles/globals.scss'
import Header from 'components/Header'

function Site({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default Site