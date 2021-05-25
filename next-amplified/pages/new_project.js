import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import styles from '../styles/Page.module.scss';
import NewProject from '../components/forms/NewProject';

export default function NewHelper() {
  return (
    <>
      <Head>
        <title>Nový pomocník</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={false}>
        <main className={styles.main}>
          <p>Stránka s formulářem nového pomocníka</p>
          <NewProject></NewProject>
          <p>
            Pokud si nevíte rady s vyplněním, zkuste se podívat na naše
            <Link href="/faq">
              <a>tipy a doporučení</a>
            </Link>
            , nebo nás{' '}
            <Link href="/kontakty">
              <a>kontaktujte</a>
            </Link>
            .
          </p>
        </main>
      </Layout>
    </>
  );
}
