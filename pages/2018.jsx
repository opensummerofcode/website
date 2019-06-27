import React from 'react';
import Layout from '../components/Layouts/Main';
import ProjectsHeader from '../components/Editions/ProjectsHeader';
import StudentsHeader from '../components/Editions/StudentsHeader';
import CoachesHeader from '../components/Editions/CoachesHeader';
import ProjectsGallery from '../components/Editions/ProjectsGallery';
import StudentsGallery from '../components/Editions/StudentsGallery';
import CoachesGallery from '../components/Editions/CoachesGallerry';
import Partners from '../components/Companies/Partners';

const YearEdition = () => (
  <Layout>
    <ProjectsHeader />
    <ProjectsGallery />
    <StudentsHeader />
    <StudentsGallery />
    <CoachesHeader />
    <CoachesGallery />
    <Partners />
  </Layout>
);

export default YearEdition;
