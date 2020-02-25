import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import editions from '../../../assets/data/editions.json';
import ProjectsHeader from '../../../components/Editions/ProjectsHeader';
import StudentsHeader from '../../../components/Editions/StudentsHeader';
import CoachesHeader from '../../../components/Editions/CoachesHeader';
import ProjectsGallery from '../../../components/Editions/ProjectsGallery';
import StudentsGallery from '../../../components/Editions/StudentsGallery';
import CoachesGallery from '../../../components/Editions/CoachesGallery';
import Partners from '../../../components/Companies/Partners';

const YearEdition = () => {
  const router = useRouter();
  const year = parseInt(router.query.year, 0);

  const edition = editions.find(e => e.year === year);
  const editionExists = !!edition;

  useEffect(() => {
    if (edition.external) {
      window.location = edition.url;
    } else if (!editionExists) {
      router.push('/404');
    }
  });

  console.log(edition, year);
  if (!editionExists) return <></>;
  return (
    <>
      <Head>
        <title>{year} projects | open Summer of Code</title>
      </Head>
      <ProjectsHeader />
      <ProjectsGallery />
      <StudentsHeader />
      <StudentsGallery />
      <CoachesHeader />
      <CoachesGallery />
      <Partners />
    </>
  );
};

export default YearEdition;
