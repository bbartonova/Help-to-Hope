import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function PageReference() {
  return (
    <>
      <Head>
        <title>Reference</title>
        <meta name="reference" content="referenční projekty Help to Hope" />
      </Head>
      <Layout isLandingPage={false}>
        <main className="p-8 min-h-screen">
          <h1 className="font-title text-green text-5xl">Naše reference</h1>
          <p className="font-body text-grey-dark text-base mb-6">
            Rádi bychom vám zde představili vybrané projekty, které se nám
            podařilo propojit.
          </p>

          <div className=" bg-grey-light text-right flex flex-col lg:flex-row rounded-lg border-b-2 border-grey">
            <div className="flex lg:justify-start lg:w-1/3 py-4">
              <Image
                src="/ctyrak_ref.jpg"
                alt="web ctyrak"
                width={500}
                height={500}
                className="object-contain"
              ></Image>
            </div>
            <div className="flex flex-col md:justify-around px-6 md:pr-8 lg:w-2/3">
              <h2 className="font-title text-grey text-4xl text-center sm:text-right">
                Webové stránky pro Salesiánskou farnost České Budějovice
              </h2>
              <p className="font-body text-grey-dark text-base text-center sm:text-right pb-6">
                Kompletní re-design stávajících webových stránek - od návrhu
                přes grafiku, tvorbu až po následnou správu webu.
              </p>
              <p className="font-body text-grey-dark text-base text-center sm:text-right">
                Martina Ch. - web designer:
                <p className="italic pb-6">
                  Komunita kolem farnosti pomáhá všem okolo, bez rozdílů a bez
                  nároku na odměnu. Ráda jsem na oplátku pomohla jim s novým
                  webem.
                </p>
              </p>
              <p className="font-body text-grey-dark text-base text-center sm:text-right">
                Petr K. - zástupce farnosti:
                <p className="italic pb-6">
                  Potřebovali jsme vytvořit nové stránky naší farnosti, které by
                  zaujaly, informovaly a odpovídaly nejnovějším trendům.
                  Dozvěděli jsme se o chystaném projektu „Help to Hope“ a
                  požádali o pomoc. Měli jsme náročné požadavky na obsahovou
                  část stránek. Martiny profesionalita, zkušenosti, kreativita a
                  cit pro design nám byli po celou dobu tvorby stránek velkou
                  oporou. Myslím, že nové stránky hovoří za vše – děkujeme!
                </p>
              </p>
              <p className="text-center sm:text-right">
                <Link href="https://ctyrak.cz/">
                  <a className="font-title text-green text-3xl">
                    www.ctyrak.cz
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
