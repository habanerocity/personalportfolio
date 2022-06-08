import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <body>
        <div id="success-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
