import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import InterestedInHelper from '../../components/forms/InterestedInHelper';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../libs/appContext';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getHelperOfProject } from '../../src/graphql/queries';
import { OmitProps } from 'antd/lib/transfer/ListBody';

export default function HelperInt() {
  const { nameProjectLS } = useContext(AppContext);
  const [helper, setHelper] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      API.graphql(graphqlOperation(getHelperOfProject, { id })).then(
        (response) => {
          console.log(response);
          setHelper(response.data.getHelperOfProject);
        },
      );
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Vybraný odborník</title>
        <meta
          name="vybraný IT odborník"
          content="formulář pro propojení s odborníkem"
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
            kontaktu s vybraným odborníkem.
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
            Jméno vybraného odborníka: {nameProjectLS}
          </h2>
          {helper && (
            <InterestedInHelper
              id={id}
              name={helper.name}
              lastname={helper.lastname}
            ></InterestedInHelper>
          )}
        </main>
      </Layout>
    </>
  );
}
