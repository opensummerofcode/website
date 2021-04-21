import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../../../components/Projects/Header';
import Team from '../../../components/Projects/Team';
import Partners from '../../../components/Projects/Partners';

const Project = ({ project, students, coaches, partners }) => (
  <>
    <Head>
      <title>{project.name} | Open Summer of Code</title>
    </Head>
    <Header project={project} />
    <Team students={students} coaches={coaches} />
    <Partners partners={partners} />
  </>
);

export async function getStaticPaths() {
  const { default: editions } = await import(`../../../public/editions/index.json`);

  const pathsQueue = editions
    .filter((e) => !e.external)
    .map(async (edition) => {
      const { default: projects } = await import(
        `../../../public/editions/${edition.year}/projects.json`
      );
      const paths = projects.map((project) => ({
        params: { year: edition.year.toString(), project: project.id },
      }));
      return paths;
    });
  const paths = await Promise.all(pathsQueue);
  return {
    paths: paths.flat(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { year, project: projectId } = params;
  const { default: projects } = await import(`../../../public/editions/${year}/projects.json`);
  const project = projects.find((p) => p.id === projectId);

  const { default: participants } = await import(
    `../../../public/editions/${year}/participants.json`
  );
  const { default: partners } = await import(`../../../public/editions/${year}/partners.json`);

  const students = project.team.students.map((student) =>
    participants.find((p) => p.id === student)
  );
  const coaches = project.team.coaches.map((coach) => participants.find((p) => p.id === coach));

  return {
    props: {
      project,
      coaches,
      students,
      partners: project.partners.map((p) => partners.find((partner) => p === partner.id)),
    },
  };
}

Project.propTypes = {
  project: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    team: PropTypes.arrayOf(PropTypes.shape).isRequired,
    partners: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
  students: PropTypes.arrayOf(PropTypes.shape).isRequired,
  coaches: PropTypes.arrayOf(PropTypes.shape).isRequired,
  partners: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Project;
