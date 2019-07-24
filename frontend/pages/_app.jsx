import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PageTransition from '../components/UI/PageTransition';
import Navigation from '../components/Common/Navigation';
import Footer from '../components/Common/Footer';

import '../assets/scss/app.scss';

class MyApp extends App {
  state = { ready: false };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    const { Component, pageProps, graphql } = this.props;

    return (
      <Container>
        <GraphQLProvider graphql={graphql}>
          <Head>
            <title>open Summer of code 2019</title>
          </Head>
          <div style={{ visibility: ready ? 'visible' : 'hidden' }}>
            <Navigation />
            {/* <PageTransition location={pathname}></PageTransition> */}
            <Component {...pageProps} />
            <Footer />
          </div>
        </GraphQLProvider>
      </Container>
    );
  }
}

export default withGraphQLApp(withRouter(MyApp));
