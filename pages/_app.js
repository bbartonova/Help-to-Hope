import Head from 'next/head';
import { AppProvider } from '../libs/appContext';
import Amplify from 'aws-amplify';
import 'antd/dist/antd.css';
import '../styles/globals.css';

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
        <meta
          name="google-site-verification"
          content="wcfGXfXKWGUbuvLJjA-NvRsvJZLuFzJE8tb8SaKROM0"
        />
        <link rel="icon" href="/favi.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
