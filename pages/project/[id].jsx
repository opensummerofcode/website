import { useRouter } from 'next/router';
import Header from '../../components/Projects/Header';
import Team from '../../components/Projects/Team';
import Partners from '../../components/Projects/Partners';
import allProjects from '../../assets/data/projects.json';
import allParticipants from '../../assets/data/participants.json';
import allPartners from '../../assets/data/partners.json';

const Project = () => {
  const router = useRouter();
  const projectId = router.query.id;
  const project = allProjects.find(p => p.id === projectId);
  const students = project.team.students.map(student =>
    allParticipants.find(p => p.id === student)
  );
  const coaches = project.team.coaches.map(coach => allParticipants.find(p => p.id === coach));
  const partners = project.partners.map(p => allPartners.find(partner => p === partner.id));
  return (
    <>
      <Header project={project} />
      <Team students={students} coaches={coaches} />
      <Partners partners={partners} />
    </>
  );
};

export default Project;
