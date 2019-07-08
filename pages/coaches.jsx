import Header from '../components/Coaches/Header';
import Info from '../components/Coaches/Info';
import Testimonials from '../components/Coaches/Testimonials';
import FeaturedProjects from '../components/Projects/FeaturedProjects';

const Coaches = () => (
  <>
    <Header />
    <Info />
    <Testimonials />
    <FeaturedProjects divider="bg-lighter-gray" />
  </>
);

export default Coaches;
