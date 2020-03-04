import { useContext } from 'react';
import useSWR from 'swr';
import MetaContext from '../context/meta';
import fetch from '../util/fetch';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';
import Partners from '../components/Companies/Partners';

const HomeContainer = () => {
  const { previousEdition, showPreviousPartners } = useContext(MetaContext);

  const partners = showPreviousPartners
    ? useSWR(() => `/editions/${previousEdition.year}/partners.json`, fetch).data
    : null;

  return (
    <>
      <HomeHeader />
      <OsocDescription />
      <Braggings />
      <Partners partners={partners} />
    </>
  );
};

export default HomeContainer;
