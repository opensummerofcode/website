import Head from 'next/head';
import Header from '../../../components/Projects/Header';
import Team from '../../../components/Projects/Team';
import Partners from '../../../components/Projects/Partners';
import allProjects from '../../../assets/data/2019/projects.json';
import allParticipants from '../../../assets/data/2019/participants.json';
import allPartners from '../../../assets/data/2019/partners.json';

const Project = ({ id }) => {
  const project = allProjects.find(p => p.id === id);
  const students = project.team.students.map(student =>
    allParticipants.find(p => p.id === student)
  );
  const coaches = project.team.coaches.map(coach => allParticipants.find(p => p.id === coach));
  const partners = project.partners.map(p => allPartners.find(partner => p === partner.id));
  return (
    <>
      <Head>
        <title>{project.name} | open Summer of Code</title>
      </Head>
      <Header project={project} />
      <Team students={students} coaches={coaches} />
      <Partners partners={partners} />
    </>
  );
};

Project.getInitialProps = ctx => {
  const { project } = ctx.query;
  return { id: project };
};

export default Project;
