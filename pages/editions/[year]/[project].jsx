import Head from 'next/head';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
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
  const res = await fetch(`${process.env.HOST_URL}/editions/index.json`);
  const editions = await res.json();

  const pathsQueue = editions
    .filter(e => !e.external)
    .map(async edition => {
      const projectsResponse = await fetch(
        `${process.env.HOST_URL}/editions/${edition.year}/projects.json`
      );
      const projects = await projectsResponse.json();
      const paths = projects.map(project => ({
        params: { year: edition.year.toString(), project: project.id }
      }));
      return paths;
    });
  const paths = await Promise.all(pathsQueue);
  return {
    paths: paths.flat(),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { year, project: projectId } = params;
  const projectsData = await fetch(`${process.env.HOST_URL}/editions/${year}/projects.json`);
  const projects = await projectsData.json();
  const project = projects.find(p => p.id === projectId);

  const participantsData = await fetch(
    `${process.env.HOST_URL}/editions/${year}/participants.json`
  );
  const participants = await participantsData.json();

  const partnerData = await fetch(`${process.env.HOST_URL}/editions/${year}/partners.json`);
  const partners = await partnerData.json();

  const students = project.team.students.map(student => participants.find(p => p.id === student));
  const coaches = project.team.coaches.map(coach => participants.find(p => p.id === coach));

  return {
    props: {
      project,
      coaches,
      students,
      partners: project.partners.map(p => partners.find(partner => p === partner.id))
    }
  };
}

export default Project;
