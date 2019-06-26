import React from 'react';
import Gallery from './Gallery';
import Project from './Project';

const Projects = () => {
  return (
    <Gallery className="c-projects">
      <Project
        name="Bike4Brussels"
        hook="Get the best route for your bike ride in Brussels!"
        logo={{ path: 'img/projects/bike4brussels.png', alt: 'Logo of project Bike4Brussels' }}
      />
      <Project
        name="bSkilled"
        hook="Get acknowledged for your skills by letting your peers endorse and verify your qualities in an easy, reliable and standardized way."
        logo={{ path: 'img/projects/bitsoftrust.png', alt: 'Logo of project Bits of Trust' }}
      />
      <Project
        name="FRIS"
        hook="An expert-finding tool to bring researchers and companies together."
        logo={{ path: 'img/projects/fris.png', alt: 'Logo of project FRIS' }}
      />
      <Project
        name="Gentlestudent"
        hook="Motivates students to engage in learning opportunities using the Open Badges Standard."
        logo={{ path: 'img/projects/gentlestudent.png', alt: 'Logo of project Gentlestudent' }}
      />
      <Project
        name="HealthStory"
        hook="Provides insights for people feeling discomfort, and compares their condition with others in Belgium."
        logo={{ path: 'img/projects/healthdata.png', alt: 'Logo of project Healthdata' }}
      />
      <Project
        name="QControl"
        hook="QControl is a web application that makes collecting data of the MIVB stops easier and more efficient!"
        logo={{ path: 'img/projects/octotrails.png', alt: 'Logo of project Octotrails' }}
      />
      <Project
        name="Open Flandria"
        hook="A visual Inspiration for Sustainable Living."
        logo={{ path: 'img/projects/openflandria.png', alt: 'Logo of project Open Flandria' }}
      />
      <Project
        name="Open Parking"
        hook="Visualize and analyze open data from Dutch parkings."
        logo={{ path: 'img/projects/openparking.png', alt: 'Logo of project Open Parking' }}
      />
      <Project
        name="Open Sea Lab"
        hook="Help researchers explore open sea data with a map visualization."
        logo={{ path: 'img/projects/opensealabs.png', alt: 'Logo of project Open Sea Lab' }}
      />
    </Gallery>
  );
};

export default Projects;
