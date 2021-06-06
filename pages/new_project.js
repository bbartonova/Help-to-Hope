import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import NewProject from '../components/forms/NewProject';

export default function NewHelper() {
  return (
    <>
      <Head>
        <title>Nový projekt</title>
        <meta name="nový projekt" content="formulář pro registraci projektu" />
      </Head>
      <Layout isLandingPage={false}>
        <main className="p-8 min-h-screen">
          <h1 className="font-title text-green text-5xl mb-6">
            Registarce nového projektu
          </h1>
          <p className="font-body text-grey-dark text-base mb-6">
            Děkujeme za váš zájem o spolupráci. Prosíme vyplňte následující
            formulář.
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Váš e-mail a telefonní číslo nebudou zobrazeny ve výpisu projektů,
            budou využity pouze pro zprostředkování kontaktu s vybraným
            odborníkem.
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Pole označené hvězdičkou jsou povinné.
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Pokud si nebudete vědět rady s vyplněním, zkuste se podívat na naše
            <Link href="/faq">
              <a> tipy a doporučení </a>
            </Link>
            nebo nás
            <Link href="/kontakty">
              <a> kontaktujte</a>
            </Link>
            .
          </p>
          <h2 className="font-title text-grey text-4xl py-4">
            Registrační formulář
          </h2>
          <NewProject></NewProject>
        </main>
      </Layout>
    </>
  );
}
