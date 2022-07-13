import PropTypes from 'prop-types';
import slugify from 'slugify';
import Gallery from './Gallery';
import Headshot from './Headshot';

const CoachesGallery = ({ edition, coaches }) => {
  const renderCoach = (coach) => {
    const slug = slugify(coach.name, { lower: true });
    return (
      <Headshot
        key={coach.id ?? slug}
        data={{ name: coach.name, isCoach: true }}
        socials={coach.socials}
        picture={coach.mugshot ?? `/editions/${edition}/participants/${slug}.jpg`}
        roleShown={false}
      />
    );
  };

  const $coaches = coaches.map(renderCoach);
  return (
    <Gallery className="headshot-gallery" modifier="align-center">
      {$coaches}
    </Gallery>
  );
};

CoachesGallery.propTypes = {
  edition: PropTypes.number.isRequired,
  coaches: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default CoachesGallery;
