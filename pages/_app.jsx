import App, { Container } from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PageTransition from '../components/UI/PageTransition';
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
    const {
      Component,
      pageProps,
      router: { pathname }
    } = this.props;

    return (
      <Container>
        <Head>
          <title>open Summer of code 2019</title>
        </Head>
        <Navigation />
        <PageTransition location={pathname}>
          <Component {...pageProps} />
        </PageTransition>
        <Footer />
      </Container>
    );
  }
}

export default withRouter(MyApp);
