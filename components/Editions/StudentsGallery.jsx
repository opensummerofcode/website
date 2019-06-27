import React from 'react';
import Headshot from './Headshot';
import Gallery from './Gallery';

const StudentsGallery = () => {
  return (
    <Gallery className="headshot-gallery">
      <Headshot
        data={{ firstName: 'Alexander', lastName: 'Vandoren' }}
        social={{
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/alexander-v-370883129/',
          github: 'https://github.com/Zenigame2'
        }}
        picture={{
          path: '/static/img/headshots/alexander_vandoren.jpg',
          alt: 'Picture of Alexander Vandoren'
        }}
      />
      <Headshot
        data={{ firstName: 'Alexis', lastName: 'Lecocq' }}
        social={{
          twitter: '',
          linkedin: 'https://fr.linkedin.com/in/alexis-lecocq-445084105',
          github: 'https://github.com/axtux'
        }}
        picture={{ path: '/static/img/headshots/alexis_lecocq.jpg', alt: 'Picture of Alexis Lecocq' }}
      />
      <Headshot
        data={{ firstName: 'Andrews', lastName: 'Leruth' }}
        social={{ twitter: '', linkedin: '', github: 'https://github.com/HispanicMojitos' }}
        picture={{ path: '/static/img/headshots/andrews_leruth.jpg', alt: 'Picture of Andrews Leruth' }}
      />
      <Headshot
        data={{ firstName: 'Antoine', lastName: 'Richez' }}
        social={{
          twitter: 'https://twitter.com/antoine_richez',
          linkedin: 'https://www.linkedin.com/in/antoine-richez-1864b8166/',
          github: 'https://github.com/Noirne'
        }}
        picture={{ path: '/static/img/headshots/antoine_richez.jpg', alt: 'Picture of Antoine Richez' }}
      />
      <Headshot
        data={{ firstName: 'Astrid', lastName: 'Sercu' }}
        social={{
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/astrid-sercu-359813136/',
          github: 'https://github.com/astrserc'
        }}
        picture={{ path: '/static/img/headshots/astrid_sercu.jpg', alt: 'Picture of Astrid Sercu' }}
      />
      <Headshot
        data={{ firstName: 'Beau-Alexander', lastName: 'Jocic' }}
        social={{
          twitter: 'https://twitter.com/BeauAlexanderJo',
          linkedin: 'https://www.linkedin.com/in/beau-alexander-jocic-933750162/',
          github: ''
        }}
        picture={{
          path: '/static/img/headshots/beau-alexander_jocic.jpg',
          alt: 'Picture of Beau-Alexander Jocic'
        }}
      />
      <Headshot
        data={{ firstName: 'Bert', lastName: 'Marcelis' }}
        social={{
          twitter: 'https://twitter.com/BertMarcelis',
          linkedin: 'https://www.linkedin.com/in/bertmarcelis/',
          github: 'https://github.com/Bertware'
        }}
        picture={{ path: '/static/img/headshots/bert_marcelis.jpg', alt: 'Picture of Bert Marcelis' }}
      />
      <Headshot
        data={{ firstName: 'Bert', lastName: 'Schoovaerts' }}
        social={{
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/bert-schoovaerts-06bb51161/',
          github: 'https://github.com/BertSchoovaerts'
        }}
        picture={{ path: '/static/img/headshots/bert_schoovaerts.jpg', alt: 'Picture of Bert Schoovaerts' }}
      />
      <Headshot
        data={{ firstName: 'Bram', lastName: 'Bleys' }}
        social={{
          twitter: 'https://twitter.com/bram_bleys',
          linkedin: 'https://www.linkedin.com/in/brambleys/',
          github: 'https://github.com/BramBleys'
        }}
        picture={{ path: '/static/img/headshots/bram_bleys.jpg', alt: 'Picture of Bram Bleys' }}
      />
      <Headshot
        data={{ firstName: 'Bram', lastName: 'De Coninck' }}
        social={{
          twitter: 'https://twitter.com/BramDC3',
          linkedin: 'https://www.linkedin.com/in/bramdc',
          github: 'https://github.com/BramDC3'
        }}
        picture={{ path: '/static/img/headshots/bram_de_coninck.jpg', alt: 'Picture of Bram De Coninck' }}
      />
      <Headshot
        data={{ firstName: 'Greet', lastName: 'Strobbe' }}
        social={{
          twitter: '',
          linkedin: '"https://www.linkedin.com/in/greet-strobbe-828568168/',
          github: ''
        }}
        picture={{ path: '/static/img/headshots/greet_strobbe.jpg', alt: 'Picture of Greet Strobbe' }}
      />
      <Headshot
        data={{ firstName: 'Brian', lastName: 'Dendauw' }}
        social={{
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/brian-dendauw-a1b8b4141/',
          github: ''
        }}
        picture={{ path: '/static/img/headshots/brian_dendauw.jpg', alt: 'Picture of Brian Dendauw' }}
      />
      <Headshot
        data={{ firstName: 'Bruce', lastName: 'Boelens' }}
        social={{
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/bruce-boelens-6ba550127/',
          github: 'https://github.com/bruceboelens'
        }}
        picture={{ path: '/static/img/headshots/bruce_boelens.jpg', alt: 'Picture of Bruce Boelens' }}
      />
    </Gallery>
  );
};

export default StudentsGallery;
