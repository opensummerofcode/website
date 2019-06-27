import Layout from '../components/Layouts/Main';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';
import Partners from '../components/Companies/Partners';

const HomeContainer = () => (
  <Layout>
    <HomeHeader />
    <OsocDescription />
    <Braggings />
    <Partners />
  </Layout>
);

export default HomeContainer;
