import React from 'react';
import Headshot from '../Editions/Headshot';

const Team = () => {
  return (
    <div className="grid-x grid-padding-x u-margin-large--tb headshot-gallery project-section">
      <div className="small-10 small-offset-1 medium-3 medium-offset-0 large-2 cell text-left">
        <h3 className="h3 u-margin-large--b">
          Meet <br /> the team
        </h3>
      </div>
      <div className="small-12 medium-9 large-10 cell">
        <div className="grid-x grid-padding-x u-margin-large--b headshot-gallery">
          <Headshot
            data={{ firstName: 'Daniëlle', lastName: 'Terras', status: 'Student' }}
            social={{
              twitter: '',
              linkedin: 'https://www.linkedin.com/in/daniëlle-terras-129570161/',
              github: ''
            }}
            picture={{
              path: '/img/headshots/daniëlle_terras.jpg',
              alt: 'Picture of Daniëlle Terras'
            }}
          />
          <Headshot
            data={{ firstName: 'Kristof', lastName: 'Neyt', status: 'Student' }}
            social={{
              twitter: '',
              linkedin: 'https://www.linkedin.com/in/kneyt',
              github: 'https://github.com/Fizz55'
            }}
            picture={{
              path: '/img/headshots/kristof_neyt.jpg',
              alt: 'Picture of Kristof Neyt'
            }}
          />

          <Headshot
            data={{ firstName: 'Robert', lastName: 'Heyse', status: 'Student' }}
            social={{
              twitter: '',
              linkedin: 'https://www.linkedin.com/in/roheyse',
              github: 'https://github.com/r0b93y'
            }}
            picture={{
              path: '/img/headshots/robert_heyse.jpg',
              alt: 'Picture of Robert Heyse'
            }}
          />

          <Headshot
            data={{ firstName: 'Ben', lastName: 'Abelshausen', status: 'Coach' }}
            social={{
              twitter: '',
              linkedin: '',
              github: ''
            }}
            picture={{
              path: '/img/headshots/ben_abelshausen.jpg',
              alt: 'Picture of Ben Abelshausen'
            }}
          />
          <Headshot
            data={{ firstName: 'Jonathan', lastName: 'Beliën', status: 'Coach' }}
            social={{
              twitter: 'https://twitter.com/jbelien',
              linkedin: '',
              github: 'https://github.com/jbelien'
            }}
            picture={{
              path: '/img/headshots/jonathan_belien.jpg',
              alt: 'Picture of Jonathan Beliën'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
