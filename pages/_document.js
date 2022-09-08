import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
// import 'bootstrap/dist/js/bootstrap.js';
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* ion-icon */}
        <Script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
