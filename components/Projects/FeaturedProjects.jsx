import { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useSWR from 'swr';
import fetch from '../../util/fetch';
import EditionContext from '../../context/edition';
import { ButtonLink } from '../UI/Buttons';

const FeaturedProjects = ({ divider }) => {
  const { current: edition } = useContext(EditionContext);

  // eslint-disable-next-line react/prop-types
  const renderProject = ({ name, description, logo, id }) => (
    <div key={id} className="small-6 medium-6 large-3 cell c-projects-project">
      <Link href="/editions/[year]/[project]" as={`/editions/${edition}/${id}`}>
        <a className="c-projects-image">
          <img src={logo} alt="Logo of project Bike4Brussels" />
        </a>
      </Link>
      <div className="c-projects-content">
        <h2 className="h5">
          <Link href="/editions/[year]/[project]" as={`/editions/${edition}/${id}`}>
            <a>{name}</a>
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );

  const { data: projects } = useSWR(`/editions/${edition}/projects.json`, fetch);

  if (!projects || projects.length === 0) return <></>;

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

FeaturedProjects.propTypes = {
  divider: PropTypes.string.isRequired
};

export default FeaturedProjects;
