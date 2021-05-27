import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import styles from '../styles/Page.module.scss';
import InterestedInHelper from '../components/forms/InterestedInHelper';
import { useContext } from 'react';
import { AppContext } from '../libs/appContext';

export default function HelperInt() {
  const { nameProjectLS } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Vybraný pomocník</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={false}>
        <main className={styles.main}>
          <h2>Jméno vybraného pomocníka: {nameProjectLS}</h2>
          <InterestedInHelper></InterestedInHelper>
          <p>
            Pokud si nevíte rady s vyplněním, zkuste se podívat na naše
            <Link href="/faq">
              <a> tipy a doporučení</a>
            </Link>
            , nebo nás
            <Link href="/kontakty">
              <a> kontaktujte</a>
            </Link>
            .
          </p>
        </main>
      </Layout>
    </>
  );
}