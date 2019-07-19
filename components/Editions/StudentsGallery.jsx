import Headshot from './Headshot';
import Gallery from './Gallery';
import participants from '../../assets/data/participants.json';

const StudentsGallery = () => {
  const renderStudent = student => (
    <Headshot
      key={student.id}
      data={{ name: student.name, isCoach: false }}
      socials={student.socials}
      picture={student.mugshot}
      roleShown={false}
    />
  );

  const $students = participants.filter(p => !p.coach).map(renderStudent);
  return (
    <Gallery className="headshot-gallery" modifier="align-center">
      {$students}
    </Gallery>
  );
};

export default StudentsGallery;
