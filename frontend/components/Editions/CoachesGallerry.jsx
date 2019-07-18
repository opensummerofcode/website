import Gallery from './Gallery';
import Headshot from './Headshot';

const CoachesGallery = () => {
  return (
    <Gallery className="headshot-gallery">
      <Headshot
        data={{ firstName: 'Dries', lastName: 'Van Ransbeeck' }}
        social={{
          twitter: 'https://twitter.com/DVRansbeeck',
          linkedin: 'https://www.linkedin.com/in/driesvanransbeeck/',
          github: 'https://github.com/Driesvanransbeeck"'
        }}
        picture={{
          path: '/static/static/img/headshots/dries_van_ransbeeck.jpg',
          alt: 'Picture of Dries Van Ransbeeck'
        }}
      />
      <Headshot
        data={{ firstName: 'Pieter', lastName: 'Colpaert' }}
        social={{
          twitter: 'https://twitter.com/pietercolpaert',
          linkedin: 'https://www.linkedin.com/in/pcolpaert/',
          github: 'https://github.com/pietercolpaert'
        }}
        picture={{ path: '/static/img/headshots/pieter_colpaert.jpg', alt: 'Picture of Pieter Colpaert' }}
      />
      <Headshot
        data={{ firstName: 'Andrews', lastName: 'Leruth' }}
        social={{ twitter: '', linkedin: '', github: 'https://github.com/HispanicMojitos' }}
        picture={{ path: '/static/img/headshots/andrews_leruth.jpg', alt: 'Picture of Andrews Leruth' }}
      />
      <Headshot
        data={{ firstName: 'Bert', lastName: 'Jehoul' }}
        social={{
          twitter: 'https://twitter.com/jeborsel',
          linkedin: 'https://www.linkedin.com/in/bertjehoul/',
          github: 'https://github.com/jeborsel'
        }}
        picture={{ path: '/static/img/headshots/bert_jehoul.jpg', alt: 'Picture of Bert Jehoul' }}
      />
      <Headshot
        data={{ firstName: 'Eveline', lastName: 'Vlassenroot' }}
        social={{
          twitter: 'https://twitter.com/EvelineVlas',
          linkedin: 'https://www.linkedin.com/in/eveline-vlassenroot-516116a6',
          github: ''
        }}
        picture={{
          path: '/static/img/headshots/eveline_vlassenroot.jpg',
          alt: 'Picture of Eveline Vlassenroot'
        }}
      />
      <Headshot
        data={{ firstName: 'Rutger', lastName: 'Bevers' }}
        social={{
          twitter: 'https://twitter.com/rutgerbevers',
          linkedin: 'https://www.linkedin.com/in/rutgerbevers/',
          github: 'https://github.com/RutgerBevers'
        }}
        picture={{
          path: '/static/img/headshots/rutger_bevers.jpg',
          alt: 'Picture of Rutger Bevers'
        }}
      />
      <Headshot
        data={{ firstName: 'Frederik', lastName: 'Vincx' }}
        social={{
          twitter: 'https://twitter.com/fritsbits',
          linkedin: 'https://www.linkedin.com/in/frederikvincx/',
          github: 'https://github.com/fritsbits'
        }}
        picture={{ path: '/static/img/headshots/frederik_vincx.jpg', alt: 'Picture of Frederik Vincx"' }}
      />
      <Headshot
        data={{ firstName: 'Pieter', lastName: 'Vander Vennet' }}
        social={{
          twitter: '',
          linkedin: '',
          github: ''
        }}
        picture={{ path: '/static/img/headshots/friso_leder.jpg', alt: 'Picture of Pieter Vander Vennet' }}
      />
      <Headshot
        data={{ firstName: 'Brecht', lastName: 'Van de Vyvere' }}
        social={{
          twitter: 'https://twitter.com/brechtvdv',
          linkedin: 'https://www.linkedin.com/in/brecht-van-de-vyvere-b9232b9b/"',
          github: 'https://github.com/brechtvdv'
        }}
        picture={{
          path: '/static/img/headshots/brecht_van_de_vyvere.jpg',
          alt: 'Picture of Brecht Van de Vyvere'
        }}
      />
      <Headshot
        data={{ firstName: 'Niels', lastName: 'Vandekeybus' }}
        social={{
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/nielsv',
          github: 'https://github.com/nvdk'
        }}
        picture={{ path: '/static/img/headshots/ben_abelshausen.jpg', alt: 'Picture of Niels Vandekeybus' }}
      />
    </Gallery>
  );
};

export default CoachesGallery;
