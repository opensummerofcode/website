import PropTypes from 'prop-types';
import Headshot from './Headshot';
import Gallery from './Gallery';

const StudentsGallery = ({ students }) => {
  const renderStudent = student => (
    <Headshot
      key={student.id}
      data={{ name: student.name, isCoach: false }}
      socials={student.socials}
      picture={student.mugshot}
      roleShown={false}
    />
  );

  const $students = students.map(renderStudent);
  return (
    <Gallery className="headshot-gallery" modifier="align-center">
      {$students}
    </Gallery>
  );
};

StudentsGallery.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default StudentsGallery;
