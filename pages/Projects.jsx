// import PropTypes from 'prop-types';
import Layout from '../components/Layouts/Main';
import { ButtonLink } from '../components/UI/Buttons';
import Header from '../components/Projects/Header';
import Team from '../components/Projects/Team';
import Partners from '../components/Projects/Partners';

const Project = () => (
  <Layout>
    <Header />
    <Team />
    <Partners />
    {/* <!-- call to action --> */}
    <div className="grid-x grid-padding-x u-margin-large--tb">
      <div className="small-12 cell text-center">
        <ButtonLink className="success u-margin-large--t" href="/2018">
          View other projects
        </ButtonLink>
      </div>
    </div>
  </Layout>
);

/* Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}; */
export default Project;
