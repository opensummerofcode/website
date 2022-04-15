import { useContext, useState } from 'react';
import useSWR from 'swr';
import MetaContext from '../context/meta';
import fetch from '../util/fetch';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';
import Partners from '../components/Partners/Partners';
import { ButtonLink } from '../components/UI/Buttons';
// import ExternalLink from '../components/UI/ExternalLink';

const HomeContainer = () => {
  const { previousEdition, showPreviousPartners, activeEdition } = useContext(MetaContext);
  const [infoNoticeShown, setInfoNoticeShown] = useState(true);

  const partners = showPreviousPartners
    ? useSWR(() => `/editions/${previousEdition.year}/partners.json`, fetch).data
    : useSWR(() => `/editions/${activeEdition.year}/partners.json`, fetch).data;

  return (
    <>
      <HomeHeader />
      <OsocDescription />
      <Braggings />
      <Partners partners={partners} />
      {infoNoticeShown && (
        <div className="covid-notice">
          {/*          <ButtonLink className="covid-notice__close">
            <i className="fa fa-close" onClick={() => setInfoNoticeShown(false)} />
          </ButtonLink>*/}
          <ButtonLink className="covid-notice__close" href="/">
            <i className="fa fa-close" onClick={() => setInfoNoticeShown(false)} />
          </ButtonLink>
          <div className="covid-notice__info-icon">
            <i className="fa fa-info" />
            <span className="visibility-hidden">Information</span>
          </div>
          <div>
            <p>
              #osoc22 will be hosted live in Belgium!
              <br />
              We follow government and safety measures.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeContainer;
