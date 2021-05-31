import Head from 'next/head';
import Layout from '../components/layout/Layout';
import HelperOfProject from '../components/forms/HelperOfProject';
import Link from 'next/link';

export default function NewHelper() {
  return (
    <>
      <Head>
        <title>Nový pomocník</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={false}>
        <main>
          <p>Stránka s formulářem nového pomocníka</p>
          <HelperOfProject></HelperOfProject>
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
