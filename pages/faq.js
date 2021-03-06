import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Faq() {
  return (
    <>
      <Head>
        <title>Často kladené dotazy</title>
        <meta
          name="často kladené dotazy"
          content="FAQ - dotazy, odpovědi a tipy"
        />
      </Head>
      <Layout isLandingPage={false}>
        <main className="p-8 min-h-screen">
          <h1 className="font-title text-green text-5xl mb-6">
            Často kladené dotazy, tipy a doporučení pro vyplnění formulářů
          </h1>
          <p className="font-title text-grey-dark text-xl mb-6">
            Kolik mě bude stát propojení s projektem nebo pomocníkem?
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Vůbec nic! Naším cílem je pomoci ke zviditelnění v online světě
            jednotlivcům, spolkům, organizacím, dobrovolníkům a všem těm, kteří
            nabízejí nezištně pomoc ostatním. Více se můžete dozvědět na stránce{' '}
            <a href="https://www.helptohope.cz/o_projektu">
              O projektu Help to Hope
            </a>
            .
          </p>
          <p className="font-title text-grey-dark text-xl mb-6">
            Proč potřebujete tolik informací?
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Všechny informace, které jsou označeny jako povinné, slouží ke
            zdárnému propojení vhodného specialisty v online světě s konkrétním
            projektem. Nepovinné údaje, které nám poskytnete zlepší vaši
            prezentaci a zvýší vaši šanci být propojen s nejvhodnějším
            projektem/pomocníkem. Více o uchovávání informací naleznete na této
            stránce:{' '}
            <a href="https://www.helptohope.cz/gdpr">Soukromí a cookies</a>.
          </p>
          <p className="font-title text-grey-dark text-xl mb-6">
            Jak rychle mě budete moci propojit s projektem/pomocníkem?
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Přijatou žádost, která je směřována ke konkrétnímu
            projektu/pomocníkovi zpracujeme během 24 hodin. Nemusíte se obávat,
            potřebné informace k propojení předáme v co nejkratším termínu to
            bude možné. Předány budou pouze potřebné údaje.
          </p>
          <p className="font-title text-grey-dark text-xl mb-6">
            Jak se mohu přidat na web jako nový pomocník v některé z online
            oblastí?
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Pokud nenaleznete na{' '}
            <a href="https://www.helptohope.cz/helper">výpisu projektů</a>{' '}
            vyhovující projekt, kterému byste chtěl/-a věnovat své znalosti a
            čas, pak prosím, vyplňte{' '}
            <a href="https://www.helptohope.cz/new_helper">
              registrační formulář
            </a>
            .
          </p>
          <p className="font-title text-grey-dark text-xl mb-6">
            Když se přidám na web jako nový pomocník, co bude následovat?
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Vámi vyplněný formulář s požadovanými informacemi zpracujeme v co
            nejkratším čase, zpravidla do 24 hodin. Vybrané informace se zobrazí
            ve výpisu všech, kteří chtějí pomáhat{' '}
            <a href="https://www.helptohope.cz/projects">na této stránce</a>.
          </p>
          <p className="font-title text-grey-dark text-xl mb-6">
            Jak mohu přidat na web svůj projekt, ke kterému hledám pomoc?
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Pokud nenaleznete ve{' '}
            <a href="https://www.helptohope.cz/projects">výpisu IT odborníků</a>{' '}
            žádného, který by nabízel služby, které potřebujete, tak neváhejte
            vyplnit
            <a href="https://www.helptohope.cz/new_project"> tento formulář</a>.
            Vámi vyplněný formulář s požadovanými informacemi zpracujeme v co
            nejkratším čase, zpravidla do 24 hodiny. Informace o projektu se
            zobrazí na webu ve{' '}
            <a href="https://www.helptohope.cz/helper">výpisu projektů</a>,
            který si prochází IT odborníci, kteří chtějí pomáhat.
          </p>
          <p className="font-title text-grey-dark text-xl mb-6">
            Uvádíte, že propojení s pomocníkem je zdarma, je možné mu však
            nabídnout odměnu za pomoc s projektem?
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Ano, i to je možné! Pokud budete přidávat na náš web svůj projekt,
            pak můžete při registraci projektu uvést, že nabízíte možnou odměnu
            a motivovat tak IT odborníka. Odměna musí být nefinančního
            charakteru, například buď v podobě naturálií, nebo originálního
            zážitku.
          </p>
        </main>
      </Layout>
    </>
  );
}
