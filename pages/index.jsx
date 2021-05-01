import { useContext } from 'react';
import useSWR from 'swr';
import MetaContext from '../context/meta';
import fetch from '../util/fetch';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';
import Partners from '../components/Partners/Partners';
// import ExternalLink from '../components/UI/ExternalLink';

const HomeContainer = () => {
  const { previousEdition, showPreviousPartners, activeEdition } = useContext(MetaContext);
  // const [infoNoticeShown, setInfoNoticeShown] = useState(true);

  const partners = showPreviousPartners
    ? useSWR(() => `/editions/${previousEdition.year}/partners.json`, fetch).data
    : useSWR(() => `/editions/${activeEdition.year}/partners.json`, fetch).data;

  return (
    <>
      <HomeHeader />
      <OsocDescription />
      <Braggings />
      <Partners partners={partners} />

      {/*
      infoNoticeShown && (
        <div className="covid-notice">
          <i
            className="covid-notice__close fa fa-close"
            role="button"
            onClick={() => setInfoNoticeShown(false)}
          />
          <div className="covid-notice__info-icon">
            <i className="fa fa-info" />
          </div>
          <div>
            <ExternalLink href="https://twitter.com/osocode">#osoc20</ExternalLink> will be a fully
            remote edition. If governmental measures allow, we might organise smaller team
            gatherings, but remote work will be the norm.
          </div>
        </div>
      )
      */}
    </>
  );
};

export default HomeContainer;
