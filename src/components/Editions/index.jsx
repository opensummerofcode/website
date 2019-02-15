import React from 'react';
import ProjectsHeader from './ProjectsHeader';
import StudentsHeader from './StudentsHeader';
import CoachesHeader from './CoachesHeader';
import ProjectsGallery from './ProjectsGallery';
import StudentsGallery from './StudentsGallery';
import CoachesGallery from './CoachesGallerry';

const YearEdition = () => {
  return (
    <React.Fragment>
      <ProjectsHeader />
      <ProjectsGallery />
      <StudentsHeader />
      <StudentsGallery />
      <CoachesHeader />
      <CoachesGallery />
    </React.Fragment>
  );
};

export default YearEdition;
