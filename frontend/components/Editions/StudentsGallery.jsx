import { useGraphQL } from 'graphql-react';
import Headshot from './Headshot';
import Gallery from './Gallery';

const StudentsGallery = () => {
  const { loading, cacheValue = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = 'http://localhost:3001/graphql';
    },
    operation: {
      query: /* GraphQL */ `
        {
          participants {
            id
            firstName
            lastName
            picture
            status
            socials {
              twitter
              github
              linkedin
            }
          }
        }
      `
    }
  });

  const renderStudent = student => (
    <Headshot
      key={student.id}
      data={{ name: `${student.firstName} ${student.lastName}`, isCoach: false }}
      socials={student.socials}
      picture={student.picture || undefined}
      roleShown={false}
    />
  );

  const $students =
    cacheValue.data &&
    cacheValue.data.participants.filter(p => p.status.includes('student')).map(renderStudent);
  return (
    <Gallery className="headshot-gallery" modifier="align-center">
      {loading && <div>Loading ...</div>}
      {cacheValue.data && $students}
    </Gallery>
  );
};

export default StudentsGallery;
