import PropTypes from 'prop-types';
import slugify from 'slugify';
import Headshot from './Headshot';
import Gallery from './Gallery';

const StudentsGallery = ({ edition, students }) => {
  const renderStudent = (student) => {
    const slug = slugify(student.name, { lower: true });
    return (
      <Headshot
        key={student.id ?? slug}
        data={{ name: student.name, isCoach: false }}
        socials={student.socials}
        picture={student.mugshot ?? `/editions/${edition}/participants/${slug}.jpg`}
        roleShown={false}
      />
    );
  };

  const $students = students.map(renderStudent);
  return (
    <Gallery className="headshot-gallery" modifier="align-center">
      {$students}
    </Gallery>
  );
};

StudentsGallery.propTypes = {
  edition: PropTypes.number.isRequired,
  students: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default StudentsGallery;
