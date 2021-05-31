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
        <title>Vybraný pomocník</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={false}>
        <main>
          <h2>Jméno vybraného pomocníka: {nameProjectLS}</h2>
          {helper && (
            <InterestedInHelper
              id={id}
              name={helper.name}
              lastname={helper.lastname}
            ></InterestedInHelper>
          )}
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
