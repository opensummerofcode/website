import Gallery from './Gallery';
import Headshot from './Headshot';
import participants from '../../assets/data/participants.json';

const CoachesGallery = () => {
  const renderStudent = coach => (
    <Headshot
      key={coach.id}
      data={{ name: coach.name, isCoach: true }}
      socials={coach.socials}
      picture={coach.mugshot}
      roleShown={false}
    />
  );

  const $coaches = participants.filter(p => p.coach).map(renderStudent);
  return (
    <Gallery className="headshot-gallery" modifier="align-center">
      {$coaches}
    </Gallery>
  );
};

export default CoachesGallery;
