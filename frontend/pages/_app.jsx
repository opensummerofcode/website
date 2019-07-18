import App, { Container } from 'next/app';
import Meta from '../components/Meta';
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
        <Meta />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

export default MyApp;
