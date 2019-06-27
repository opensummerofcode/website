import Layout from '../components/Layouts/Main';
import Header from '../components/Companies/Header';
import Info from '../components/Companies/Info';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import Partners from '../components/Companies/Partners';

const Companies = () => (
  <Layout>
    <Header />
    <Info />
    <FeaturedProjects />
    <Partners />
  </Layout>
);

export default Companies;
