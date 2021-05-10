import Head from 'next/head';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';

export default function AboutProject() {
  return (
    <>
      <Head>
        <title>O projektu</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={true}>
        <main className={styles.main}>
          <p>O projektu</p>
        </main>
      </Layout>
    </>
  );
}
