import Head from 'next/head';

import '../assets/scss/app.scss';

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Open+Sans:300,400"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
    />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>open Summer of code 2019</title>
  </Head>
);

export default Meta;
