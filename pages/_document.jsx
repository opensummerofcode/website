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
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Open+Sans:300,400"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
          />
          <link rel="manifest" href="static/manifest.json" />
          <meta
            name="description"
            content="Innovative open source projects, made by incredibly motivated students, coaches and organisations."
          />
          <meta name="keywords" content="oSoc19, open, summer, code, Belgium" />
          <meta name="author" content="oSoc19 team, Open Knowledge Belgium" />

          {/* Socials */}
          <meta property="og:title" content="open summer of code 2019" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://2019.summerofcode.be" />
          <meta
            property="og:image"
            content="http://2019.summerofcode.be/static/img/socialmedia/socialmedia.png?4362984378"
          />
          <meta
            property="og:description"
            content="Innovative open source projects, made by incredibly motivated students, coaches and organisations."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@osocode" />
          <meta name="twitter:title" content="open summer of code 2019" />
          <meta
            name="twitter:description"
            content="Innovative open source projects, made by incredibly motivated students, coaches and organisations."
          />
          <meta
            name="twitter:image"
            content="http://2019.summerofcode.be/static/img/socialmedia/socialmedia.png?4362984378"
          />
          <meta name="twitter:url" content="http://2019.summerofcode.be/" />

          {/* Favicons */}
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/static/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/favicons/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicons/android-chrome-192x192.png"
            sizes="192x192"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="‪#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta name="theme-color" content="‪#FFFFFF" />
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
