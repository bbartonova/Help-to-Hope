import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function successAdd() {
  return (
    <>
      <Head>
        <title>Poděkování za přidání</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={false}>
        <main className={styles.main}>
          <p>Děkujeme za přidání.</p>
        </main>
      </Layout>
    </>
  );
}
