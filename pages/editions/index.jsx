// pages/editions/index.js

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import ProjectsHeader from '../../components/Editions/ProjectsHeader';
import ProjectsGallery from '../../components/Editions/ProjectsGallery';
import Partners from '../../components/Partners/Partners';

const EditionOverview = ({ editions }) => {
  useEffect(() => {}, []);

  const sortAlphabetically = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  };

  return (
    <>
      <Head>
        <title>Projects | Open Summer of Code</title>
      </Head>
      <ProjectsHeader />
      {editions
        .sort((a, b) => b.year - a.year)
        .map((edition) => (
          <div key={edition.year}>
            <h2 className="u-padding-x-large-tl">{edition.year}</h2>
            <ProjectsGallery edition={edition.year} isDemoDay={false} projects={edition.projects} />
            <Partners partners={edition.partners} />
          </div>
        ))}
    </>
  );
};

export async function getStaticProps() {
  const editions = [2019, 2020, 2021, 2022];
  const data = await Promise.all(
    editions.map(async (year) => {
      const [partners, participants, projects] = await Promise.all([
        import(`../../public/editions/${year}/partners.json`),
        import(`../../public/editions/${year}/participants.json`),
        import(`../../public/editions/${year}/projects.json`),
      ]);

      return {
        year,
        partners: partners.default,
        participants: participants.default,
        projects: projects.default,
      };
    })
  );

  return {
    props: {
      editions: data,
    },
  };
}

EditionOverview.propTypes = {
  editions: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      partners: PropTypes.arrayOf(PropTypes.shape).isRequired,
      participants: PropTypes.arrayOf(PropTypes.shape).isRequired,
      projects: PropTypes.arrayOf(PropTypes.shape).isRequired,
    })
  ).isRequired,
};

export default EditionOverview;
