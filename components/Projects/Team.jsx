import Headshot from '../Editions/Headshot';

const Team = ({ students, coaches }) => {
  const renderMugshot = (person, isCoach) => (
    <Headshot
      key={person.id}
      data={{ name: person.name, isCoach }}
      socials={person.socials}
      picture={person.mugshot}
    />
  );
  const $students = students.map(c => renderMugshot(c, false));
  const $coaches = coaches.map(c => renderMugshot(c, true));
  return (
    <div className="grid-x grid-padding-x u-margin-large--tb headshot-gallery project-section">
      <div className="small-10 small-offset-1 medium-3 medium-offset-0 large-2 cell text-left">
        <h3 className="h3 u-margin-large--b">
          Meet <br /> the team
        </h3>
      </div>
      <div className="small-12 medium-9 large-10 cell">
        <div className="grid-x grid-padding-x u-margin-large--b headshot-gallery">
          {$students}
          {$coaches}
        </div>
      </div>
    </div>
  );
};

export default Team;
