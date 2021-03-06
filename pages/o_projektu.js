import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function AboutProject() {
  return (
    <>
      <Head>
        <title>O projektu</title>
        <meta name="o projektu" content="o projektu Help to Hope" />
      </Head>
      <Layout isLandingPage={false}>
        <main className="p-8">
          <h1 className="font-title text-green text-5xl">O projektu</h1>

          <p className="font-body text-grey-dark text-base">
            Děkujeme za návštěvu našich stránek a těší nás, že se chcete
            dozvědět více o našem projektu.
          </p>
          <p className="font-body text-grey-dark text-base">
            Náš projekt je projekt s příběhem, jehož konec bude záležet na nás a
            taky na lidech, kteří jsou ochotni pomáhat. Pomáhat naději být více
            vidět ve světě IT!
          </p>

          <h2 className="font-title text-grey text-4xl pt-4">
            Jak vznikl projekt Help to Hope
          </h2>

          <p className="font-body text-grey-dark text-base">
            Na počátku tohoto příběhu je komunita lidí kolem Salesiánské
            farnosti v Českých Budějovicích. Lidí, kteří nezištně pomáhají
            ostatním, ze srdce a s radostí. Jejich pomoc je nadějí pro mnoho
            dalších.
          </p>

          <p className="font-body text-grey-dark text-base">
            Někdy ale i tato naděje potřebuje pomoc. Potřebuje pomoci být více a
            lépe vidět v online světě, aby se dostala k více lidem, kteří ji
            potřebují. V dnešní době možná více než kdy předtím, kdy se svět
            přesouvá do online světa. Martina věnovala farnosti svůj čas a
            znalosti a vznikly tak nové webové stránky.
          </p>

          <p className="font-body text-green text-base">
            A protože takových nadějí, které potřebují pomoc, existuje určitě
            více, vzniká projekt Help to Hope.
          </p>

          <h2 className="font-title text-grey text-4xl pt-4">
            Kdy vznikl projekt Help to Hope
          </h2>

          <p className="font-body text-grey-dark text-base">
            Díky účasti na "Digitální akademii: Web" od Czechitas dostal projekt
            konkrétní podobu.
          </p>
          <p className="font-body text-grey-dark text-base">
            Na začátku akademie se k projektu připojila Blanka, která věnovala
            kus života studiu a práci v kulturních institucích, spolcích,
            festivalech. Ráda nápad Martiny přijala, protože zviditelnit se
            potřebují mnohé dobré aktivity i v těchto oblastech, které nezištně
            svou činností pomáhají, ale nejsou v online světě vidět a obecně se
            o nich málo ví. Zbytečně tak dobré nápady zapadnou do zapomnění.
          </p>

          <h2 className="font-title text-grey text-4xl pt-4">
            Komu by měl projekt pomáhat?
          </h2>

          <p className="font-body text-grey-dark text-base">
            Jednotlivcům, spolkům, organizacím, dobrovolníkům a všem těm, kteří
            nabízejí nezištně pomoc ostatním z čisté radosti z pomoci druhým.
            Přinášejí tak naději a potřebují tuto naději více nebo lépe
            zviditelnit v online světě.
          </p>

          <h2 className="font-title text-grey text-4xl pt-4">
            Kdo může pomáhat?
          </h2>

          <p className="font-body text-grey-dark text-base">
            Lidé z IT světa, kteří mají chuť pomoci naději být více vidět na
            internetu. Tvůrci webů, online marketéři, odborníci na další odvětví
            webové problematiky (SEO, grafika, ...). Mohou jim darovat své
            znalosti, svůj čas a vytvořit jim web nebo jim pomoci propagovat
            jejich online prezentaci, která bude vidět a pomůže naději dostat se
            k více lidem, kteří ji potřebují.
          </p>

          <p className="font-body text-grey-dark text-base">
            Tento projekt si klade za cíl propojit tyto dvě strany.
          </p>

          <p className="font-body text-grey-dark text-base">
            Ti, kteří pomoc potřebují, zde naleznou lidi z IT, kteří nabízejí
            pomoc. Případně budou moci požádat o předání informací o jejich
            projektu s žádostí o pomoc.
          </p>

          <p className="font-body text-grey-dark text-base">
            Lidé z IT komunity zde najdou projekty, které potřebují pomoc, nebo
            budou moci nabídnout vlastní pomoc dalším potenciálním nadějím.
          </p>

          <p className="font-body text-green text-base">
            Propojíme dvě strany jedné mince.
          </p>
        </main>
      </Layout>
    </>
  );
}
