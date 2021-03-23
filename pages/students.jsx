import Head from 'next/head';
import Header from '../components/Students/Header';
import Info from '../components/Students/Info';
import Testimonials from '../components/Students/Testimonials';

const Students = () => (
  <>
    <Head>
      <title>Students | Open Summer of Code</title>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      <script async defer src="https://www.instagram.com/embed.js" />
    </Head>
    <Header />
    <Info />
    <Testimonials />
  </>
);

export default Students;
