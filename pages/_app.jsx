import App, { Container } from 'next/app';
import Head from 'next/head';
import Navigation from '../components/Common/Navigation';
import Footer from '../components/Common/Footer';

import '../assets/scss/app.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>open Summer of code 2019</title>
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

export default MyApp;
