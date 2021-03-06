import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function successAdd() {
  return (
    <>
      <Head>
        <title>Poděkování za přidání</title>
        <meta name="poděkování" content="poděkování za přidání dat" />
      </Head>
      <Layout isLandingPage={false}>
        <main className="xl:p-8 min-h-screen bg-success-backround bg-right xl:bg-bottom flex flex-col xl:justify-around">
          <div className="flex flex-col justify-center px-8 sm:px-0 bg-white bg-opacity-80 h-screen xl:h-auto xl:bg-transparent text-center xl:text-left">
            <h1 className="font-title text-green text-5xl">
              Děkujeme za vyplnění a přidání informací.
            </h1>
            <h2 className="font-title text-grey text-4xl pt-4">
              Vybrané informace se brzy zobrazí na webu.
            </h2>
            <p className="font-body text-grey-dark text-base my-6">
              Pro více informací se můžete podívat na stránku s
              <Link href="/faq">
                <a> Často kladenými dotazy </a>
              </Link>
              .
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
