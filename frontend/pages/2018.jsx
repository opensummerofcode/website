import Head from 'next/head';
import ProjectsHeader from '../components/Editions/ProjectsHeader';
import StudentsHeader from '../components/Editions/StudentsHeader';
import CoachesHeader from '../components/Editions/CoachesHeader';
import ProjectsGallery from '../components/Editions/ProjectsGallery';
import StudentsGallery from '../components/Editions/StudentsGallery';
import CoachesGallery from '../components/Editions/CoachesGallerry';
import Partners from '../components/Companies/Partners';

const YearEdition = () => (
  <>
    <Head>
      <title>2018 projects | open Summer of Code</title>
    </Head>
    <ProjectsHeader />
    <ProjectsGallery />
    <StudentsHeader />
    <StudentsGallery />
    <CoachesHeader />
    <CoachesGallery />
    <Partners />
  </>
);

export default YearEdition;
