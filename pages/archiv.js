import Head from 'next/head';
import Layout from '../components/layout/Layout';

import InterestedInHelper from '../components/forms/InterestedInHelper';

export default function PageArchiv() {
  return (
    <>
      <Head>
        <title>Archiv projektů</title>
        <meta name="archiv" content="budoucí archiv propojených projektů" />
      </Head>
      <Layout isLandingPage={false}>
        <main>
          <p>Archiv projektů</p>
          <div className="bg-hero-pattern">
            <p>Archiv projektů</p>
            <p>Archiv projektů</p>
            <p>Archiv projektů</p>
            <p>Archiv projektů</p>
          </div>
        </main>
      </Layout>
    </>
  );
}
