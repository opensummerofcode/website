import { useState, useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import useSWR from 'swr';
import fetch from '../util/fetch';
import MetaContext from '../context/meta';
import PageTransition from '../components/UI/PageTransition';
import Navigation from '../components/Common/Navigation';
import Footer from '../components/Common/Footer';

import '../assets/scss/app.scss';

const MyApp = ({ Component, pageProps }) => {
  const [ready, setReady] = useState(false);

  const { data: editionData } = useSWR('/editions/index.json', fetch);

  // Ready state is also to avoid flash of unstyled content
  useEffect(() => {
    if (!editionData) return;
    setReady(true);
  }, [editionData]);

  const $head = (
    <Head>
      <title>open Summer of code 2019</title>
    </Head>
  );

  if (!editionData) return $head;

  const metaContext = {
    editions: editionData,
    activeEdition: editionData.find(e => e.active).year,
    showPreviousPartners: true
  };
  return (
    <MetaContext.Provider value={metaContext}>
      {$head}
      <div style={{ visibility: ready ? 'visible' : 'hidden' }}>
        <div className="content-wrapper">
          <Navigation />
          {/* <PageTransition location={pathname}></PageTransition> */}
          <Component editions={editionData} {...pageProps} />
        </div>
        <Footer />
      </div>
    </MetaContext.Provider>
  );
};

export default withRouter(MyApp);
