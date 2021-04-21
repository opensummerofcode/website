import PropTypes from 'prop-types';
import Gallery from './Gallery';
import Headshot from './Headshot';

const CoachesGallery = ({ coaches }) => {
  const renderCoach = (coach) => (
    <Headshot
      key={coach.id}
      data={{ name: coach.name, isCoach: true }}
      socials={coach.socials}
      picture={coach.mugshot}
      roleShown={false}
    />
  );

  const $coaches = coaches.map(renderCoach);
  return (
    <Gallery className="headshot-gallery" modifier="align-center">
      {$coaches}
    </Gallery>
  );
};

CoachesGallery.propTypes = {
  coaches: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default CoachesGallery;
