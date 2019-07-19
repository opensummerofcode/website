import Link from 'next/link';
import { ButtonLink } from '../UI/Buttons';

import projects from '../../assets/data/projects.json';

const FeaturedProjects = ({ divider }) => {
  const renderProject = ({ name, description, logo, id }) => (
    <div key={id} className="small-6 medium-6 large-3 cell c-projects-project">
      <Link href="/2019/[id]" as={`/2019/${id}`}>
        <a className="c-projects-image">
          <img src={logo} alt="Logo of project Bike4Brussels" />
        </a>
      </Link>
      <div className="c-projects-content">
        <h2 className="h5">
          <Link href="/2019/[id]" as={`/2019/${id}`}>
            <a>{name}</a>
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );

  const $projects = projects.filter(p => p.featured).map(renderProject);
  return (
    <div className={`u-padding-x-large--tb c-projects-old ${divider}`}>
      <div className="grid-x grid-padding-x align-center">
        {$projects}
        <ButtonLink
          className="medium-7 large-4 c-projects-old__project align-center text-center u-margin-large--t"
          href="/2019"
        >
          View this year&apos;s projects
        </ButtonLink>
      </div>
    </div>
  );
};

export default FeaturedProjects;
