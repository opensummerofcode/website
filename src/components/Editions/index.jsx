import React from 'react';
import ProjectsHeader from './ProjectsHeader';
import StudentsHeader from './StudentsHeader';
import CoachesHeader from './CoachesHeader';
import ProjectsGallery from './ProjectsGallery';

const YearEdition = () => {
  return (
    <React.Fragment>
      <ProjectsHeader />
      <ProjectsGallery />
      <StudentsHeader />
      <CoachesHeader />
    </React.Fragment>
  );
};

export default YearEdition;
