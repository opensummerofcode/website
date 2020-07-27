import Head from 'next/head';
import { ButtonLink } from '../components/UI/Buttons';
import Header from '../components/Projects/Header';
import Team from '../components/Projects/Team';
import Partners from '../components/Projects/Partners';

const Project = () => (
  <>
    <Head>
      <title>Projects | Open Summer of Code</title>
    </Head>
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
  </>
);

/* Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}; */
export default Project;
