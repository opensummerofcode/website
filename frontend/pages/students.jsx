import Head from 'next/head';
import Header from '../components/Students/Header';
import Info from '../components/Students/Info';
import Testimonials from '../components/Students/Testimonials';

const Students = () => (
  <>
    <Head>
      <title>Students | open Summer of Code</title>
    </Head>
    <Header />
    <Info />
    <Testimonials />
  </>
);

export default Students;
