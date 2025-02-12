// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Link to your global CSS files */}
          <link rel="stylesheet" href="/assets/css/global.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
          <link rel="stylesheet" href="/App.css" />
          <link rel="stylesheet" href="/index.css" />
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
