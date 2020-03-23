import { useContext, useState } from 'react';
import useSWR from 'swr';
import MetaContext from '../context/meta';
import fetch from '../util/fetch';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';
import Partners from '../components/Companies/Partners';
import ExternalLink from '../components/UI/ExternalLink';

const HomeContainer = () => {
  const { previousEdition, showPreviousPartners } = useContext(MetaContext);
  const [infoNoticeShown, setInfoNoticeShown] = useState(true);

  const partners = showPreviousPartners
    ? useSWR(() => `/editions/${previousEdition.year}/partners.json`, fetch).data
    : null;

  return (
    <>
      <HomeHeader />
      <OsocDescription />
      <Braggings />
      <Partners partners={partners} />
      {infoNoticeShown && (
        <div className="covid-notice">
          {/* eslint-disable-next-line */}
          <i
            className="covid-notice__close fa fa-close"
            role="button"
            onClick={() => setInfoNoticeShown(false)}
          />
          <div className="covid-notice__info-icon">
            <i className="fa fa-info" />
          </div>
          <div>
            This year&apos;s edition of Open Summer of Code is <strong>guaranteed</strong>, despite{' '}
            <ExternalLink href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">
              the COVID-19 pandemic
            </ExternalLink>
            . If social distancing measures are still required in July,{' '}
            <ExternalLink href="https://twitter.com/osocode">#osoc20</ExternalLink> will be remote.
          </div>
        </div>
      )}
    </>
  );
};

export default HomeContainer;
