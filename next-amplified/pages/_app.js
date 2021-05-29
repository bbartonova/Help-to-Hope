import Head from 'next/head';
import { AppProvider } from '../libs/appContext';
import '../styles/globals.css';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.ico" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
