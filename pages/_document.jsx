import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link
            href="https://fonts.googleapis.com/css?font-display=swap&amp;family=Montserrat:400,500,600,700|Open+Sans:300,400"
            rel="stylesheet"
          />
          <link rel="manifest" href="public/manifest.json" />
          <meta
            name="description"
            content="Innovative open source projects, made by incredibly motivated students, coaches and organisations."
          />
          <meta name="keywords" content="osoc20, open, summer, code, Belgium" />
          <meta name="author" content="osoc20 team, Open Knowledge Belgium" />

          {/* Socials */}
          <meta property="og:title" content="open summer of code" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://osoc.be" />
          <meta
            property="og:image"
            content="http://osoc.be/img/socialmedia/socialmedia.png?4362984378"
          />
          <meta
            property="og:description"
            content="Innovative open source projects, made by incredibly motivated students, coaches and organisations."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@osocode" />
          <meta name="twitter:title" content="open summer of code" />
          <meta
            name="twitter:description"
            content="Innovative open source projects, made by incredibly motivated students, coaches and organisations."
          />
          <meta
            name="twitter:image"
            content="http://osoc.be/img/socialmedia/socialmedia.png?4362984378"
          />
          <meta name="twitter:url" content="http://osoc.be/" />

          {/* Favicons */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/android-chrome-192x192.png"
            sizes="192x192"
          />
          <link rel="manifest" href="/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="‪#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta name="theme-color" content="‪#FFFFFF" />
          <script src="/polyfills/array-find.js" type="application/javascript" />
          {process.env.ENV === 'production' && (
            <script src="/analytics.js" type="application/javascript" />
          )}
          <script src="https://player.vimeo.com/api/player.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
