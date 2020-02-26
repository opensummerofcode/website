import { useState, useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PageTransition from '../components/UI/PageTransition';
import Navigation from '../components/Common/Navigation';
import Footer from '../components/Common/Footer';

import '../assets/scss/app.scss';

const MyApp = ({ Component, pageProps }) => {
  const [ready, setReady] = useState(false);

  // Ready state is to avoid flash of unstyled content
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <Head>
        <title>open Summer of code 2019</title>
      </Head>
      <div style={{ visibility: ready ? 'visible' : 'hidden' }}>
        <Navigation />
        {/* <PageTransition location={pathname}></PageTransition> */}
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default withRouter(MyApp);
