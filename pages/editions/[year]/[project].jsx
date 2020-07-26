import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from '../../../util/fetch';
import Header from '../../../components/Projects/Header';
import Team from '../../../components/Projects/Team';
import Partners from '../../../components/Projects/Partners';

const Project = () => {
  const router = useRouter();
  const projectId = router.query.project;
  const year = parseInt(router.query.year, 0);

  const { data: projects } = useSWR(() => `/editions/${year}/projects.json`, fetch);
  const { data: allParticipants } = useSWR(() => `/editions/${year}/participants.json`, fetch);
  const { data: allPartners } = useSWR(() => `/editions/${year}/partners.json`, fetch);

  if (!projects || !allParticipants || !allPartners) return <></>;
  const project = projects.find(p => p.id === projectId);

  const students = project.team.students.map(student =>
    allParticipants.find(p => p.id === student)
  );
  const coaches = project.team.coaches.map(coach => allParticipants.find(p => p.id === coach));
  const partners = project.partners.map(p => allPartners.find(partner => p === partner.id));
  return (
    <>
      <Head>
        <title>{project.name} | Open Summer of Code</title>
      </Head>
      <Header project={project} />
      <Team students={students} coaches={coaches} />
      <Partners partners={partners} />
    </>
  );
};

export default Project;
