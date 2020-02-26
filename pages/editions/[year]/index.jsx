import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from '../../../util/fetch';
import ProjectsHeader from '../../../components/Editions/ProjectsHeader';
import StudentsHeader from '../../../components/Editions/StudentsHeader';
import CoachesHeader from '../../../components/Editions/CoachesHeader';
import ProjectsGallery from '../../../components/Editions/ProjectsGallery';
import StudentsGallery from '../../../components/Editions/StudentsGallery';
import CoachesGallery from '../../../components/Editions/CoachesGallery';
import Partners from '../../../components/Companies/Partners';

const EditionOverview = ({ editions }) => {
  const router = useRouter();
  const year = parseInt(router.query.year, 0);

  const edition = editions.find(e => e.year === year);
  const editionExists = !!edition;

  const { data: projects } = useSWR(() => `/editions/${year}/projects.json`, fetch);
  const { data: participants } = useSWR(() => `/editions/${year}/participants.json`, fetch);
  const { data: partners } = useSWR(() => `/editions/${year}/partners.json`, fetch);

  useEffect(() => {
    if (edition.external) {
      window.location = edition.url;
    } else if (!editionExists) {
      router.push('/404');
    }
  }, []);

  if (!editionExists || !projects || !participants || !partners) return <></>;

  const coaches = participants.filter(p => p.coach);
  const students = participants.filter(p => !p.coach);

  return (
    <>
      <Head>
        <title>{year} projects | open Summer of Code</title>
      </Head>
      <ProjectsHeader />
      <ProjectsGallery edition={year} projects={projects} />
      <StudentsHeader />
      <StudentsGallery students={students} />
      <CoachesHeader />
      <CoachesGallery coaches={coaches} />
      <Partners partners={partners} />
    </>
  );
};

export default EditionOverview;
