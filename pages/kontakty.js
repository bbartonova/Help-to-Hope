import Head from 'next/head';
import Layout from '../components/layout/Layout';
import styles from '../styles/Page.module.scss';
import ContactForm from '../components/forms/ContactForm';

export default function PageKontakty() {
  return (
    <>
      <Head>
        <title>Kontakty</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={false}>
        <main className={styles.main}>
          <p>Kontakty</p>
          <ContactForm></ContactForm>
        </main>
      </Layout>
    </>
  );
}
