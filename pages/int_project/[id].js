import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import InterestInProject from '../../components/forms/InterestInProject';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../libs/appContext';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getNewProject } from '../../src/graphql/queries';
import { OmitProps } from 'antd/lib/transfer/ListBody';

export default function HelperInt() {
  const { nameProjectLS } = useContext(AppContext);
  const [project, setProject] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      API.graphql(graphqlOperation(getNewProject, { id })).then((response) => {
        console.log(response);
        setProject(response.data.getNewProject);
      });
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Vybraný projekt</title>
        <meta
          name="vybraný projekt"
          content="formulář pro propojení s projektem"
        />
      </Head>
      <Layout isLandingPage={false}>
        <main className="p-8 min-h-screen">
          <h1 className="font-title text-green text-5xl mb-6">
            Zájem o spolupráci
          </h1>
          <p className="font-body text-grey-dark text-base mb-6">
            Děkujeme za váš zájem o spolupráci. Abychom vás mohli propojit,
            vyplňte prosím následující formulář.
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Váš e-mail a telefonní číslo budou využity pouze pro zprostředkování
            kontaktu se zájemcem o pomoc.
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Pole označené hvězdičkou jsou povinné.
          </p>
          <p className="font-body text-grey-dark text-base mb-6">
            Pokud si nebudete vědět rady s vyplněním, zkuste se podívat na naše
            <Link href="/faq">
              <a> tipy a doporučení</a>
            </Link>
            , nebo nás
            <Link href="/kontakty">
              <a> kontaktujte</a>
            </Link>
            .
          </p>
          <h2 className="font-title text-grey text-4xl py-4">
            Jméno vybraného projektu: {nameProjectLS}
          </h2>
          {project && (
            <InterestInProject id={id} name={project.name}></InterestInProject>
          )}
        </main>
      </Layout>
    </>
  );
}
