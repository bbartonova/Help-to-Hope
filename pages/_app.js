import Head from 'next/head';
import { AppProvider } from '../libs/appContext';
import '../styles/globals.css';
import Amplify from 'aws-amplify';

Amplify.configure({
  aws_project_region: process.env.NEXT_PUBLIC_aws_project_region,
  aws_appsync_graphqlEndpoint:
    process.env.NEXT_PUBLIC_aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.NEXT_PUBLIC_aws_appsync_region,
  aws_appsync_authenticationType:
    process.env.NEXT_PUBLIC_aws_appsync_authenticationType,
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_aws_appsync_apiKey,
});

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
