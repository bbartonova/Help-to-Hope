import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/forms/ContactForm';

export default function PageKontakty() {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta name="kontakty" content="kontaktní informace Help to Hope" />
      </Head>
      <Layout isLandingPage={false}>
        <main className="p-8 min-h-screen">
          <h1 className="font-title text-green text-5xl">Kontakty</h1>
          <h2 className="font-title text-grey text-4xl pt-4">Help to Hope</h2>
          <p className="font-title text-grey text-3xl py-4">
            Blanka Bartoňová, Martina Chromá
          </p>

          <p className="font-body text-grey-dark text-base pb-3">
            E-mail:{' '}
            <a className="text-green" href="mailto:helptohope.info@gmail.com">
              helptohope.info@gmail.com
            </a>
          </p>
          <p className="font-body text-grey-dark text-base pb-3">
            Neváhejte se na nás kdykoliv obrátit. Tým Help to Hope: Blanka a
            Martina
          </p>
          <h2 className="font-title text-grey text-4xl py-4">
            Kontaktujte nás
          </h2>

          <ContactForm></ContactForm>

          <p className="font-body text-grey-dark text-base">
            * povinné položky
          </p>
        </main>
      </Layout>
    </>
  );
}
