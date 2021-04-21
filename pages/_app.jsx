import { useState, useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import useSWR from 'swr';
import fetch from '../util/fetch';
import MetaContext from '../context/meta';
// import PageTransition from '../components/UI/PageTransition';
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
      <title>Open Summer of Code 2020</title>
    </Head>
  );

  if (!editionData) return $head;

  const activeEdition = editionData.find((e) => e.active);
  const metaContext = {
    editions: editionData,
    activeEdition: activeEdition.year,
    showPreviousPartners: false,
    previousEdition: editionData.find((e) => e.nr === activeEdition.nr - 1),
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
