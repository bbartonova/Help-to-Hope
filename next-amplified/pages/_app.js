import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
