import { useState, useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import fetch from 'unfetch';
import useSWR from 'swr';
import PageTransition from '../components/UI/PageTransition';
import Navigation from '../components/Common/Navigation';
import Footer from '../components/Common/Footer';

import '../assets/scss/app.scss';

const fetcher = url => fetch(url).then(r => r.json());

const MyApp = ({ Component, pageProps }) => {
  const [ready, setReady] = useState(false);

  const { data: editionData } = useSWR('/editions/index.json', fetcher);

  // Ready state is also to avoid flash of unstyled content
  useEffect(() => {
    if (editionData) setReady(true);
  }, [editionData]);

  return (
    <>
      <Head>
        <title>open Summer of code 2019</title>
      </Head>
      <div style={{ visibility: ready ? 'visible' : 'hidden' }}>
        <Navigation />
        {/* <PageTransition location={pathname}></PageTransition> */}
        {editionData && <Component editions={editionData} {...pageProps} />}
        <Footer />
      </div>
    </>
  );
};

export default withRouter(MyApp);
