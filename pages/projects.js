import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import Helper from '../components/helper/Helper';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listHelperOfProjects } from '../src/graphql/queries';
import { Select } from 'antd';
const defaultFilterValue = 'všichni odborníci';
export default function Projects() {
  const [helpers, setHelpers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listHelperOfProjects)).then((response) => {
      console.log(response);
      setHelpers(response.data.listHelperOfProjects.items);

      setCategories([
        ...new Set([
          defaultFilterValue,
          ...response.data.listHelperOfProjects.items.map(
            (project) => project.businessField,
          ),
        ]),
      ]);
    });
  }, []);

  const onFilterChange = (value) => {
    API.graphql(
      graphqlOperation(listHelperOfProjects, {
        filter: {
          businessField: {
            contains: value === defaultFilterValue ? '' : value,
          },
        },
      }),
    ).then((response) => {
      setHelpers(response.data.listHelperOfProjects.items);
    });
  };

  return (
    <>
      <Head>
        <title>Potřebuji pomoct</title>
        <meta
          name="potřebuji pomoct"
          content="výpis registrovaných IT odborníků"
        />
      </Head>
      <Layout isLandingPage={false}>
        <main className="min-h-screen">
          <div className="bg-projects-backround bg-cover bg-left-top lg:bg-top xl:bg-left-top flex justify-between">
            <div className="lg:w-1/2"></div>
            <div className="flex justify-end flex-col text-center md:text-right p-8 bg-white bg-opacity-80 lg:bg-transparent lg:w-1/2">
              <h1 className="font-title text-green text-5xl">
                Potřebuji pomoc
              </h1>
              <h2 className="font-title text-grey text-4xl pt-4">
                Komu můžeme pomoct
              </h2>
              <p className="font-body text-grey-dark text-base pb-3">
                Projekt Help to Hope má pomáhat jednotlivcům, skupinám,
                dobrovolníkům, všem těm, kdo pomáhají bezištně ostatním a
                potřebují být více, nebo lépe vidět v online světě.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Být lépe vidět znamená přinést naději více lidem. Chceme dělat
                naději dostupnější.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Pokud máte dobrý nápad, projekt, nebo již reálně pomáháte
                dalším, my pomůžeme vám najít IT odborníka pro váši naději.
              </p>
              <h2 className="font-title text-grey text-4xl pt-4">
                Kdo vám může pomoci
              </h2>
              <p className="font-body text-grey-dark text-base pb-3">
                Níže najdete přehled IT odborníků, kteří se přidlali k projektu
                Help to Hope.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Pro snadnější hledání odborníka, kterého potřebujete, využijte
                možnost filtrování podle oblasti pomoci.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Po kliknutí na Další informace se vám zobrazí všechny informace.
                Pokud budete mít zájem o spolupráci, klikněte na Chci pomoct a
                my vás propojíme.
              </p>
              <h2 className="font-title text-grey text-4xl pt-4">
                Další možnosti
              </h2>
              <p className="font-body text-grey-dark text-base pb-3">
                Pokud v naši nabídce nenajdete správnou osobu, můžete přidat váš
                projekt. Registrované projekty prochází IT odborníci. Odkaz na
                registraci projektu najdete níže.
              </p>
            </div>
          </div>
          <div className="bg-grey flex flex-col justify-center items-center p-8">
            <h2 className="font-title text-grey-light text-4xl pt-4 text-center">
              Seznam registrovaných IT odborníků
            </h2>
            <div>
              <Select
                className="py-8 font-body text-grey-dark w-96"
                onChange={onFilterChange}
                placeholder="Vyberte oblast:"
                defaultValue={defaultFilterValue}
              >
                {categories.map((category) => (
                  <Select.Option value={category} key={category}>
                    {category}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          {helpers.map((helper) => (
            <Helper
              key={helper.id}
              id={helper.id}
              name={helper.name}
              lastname={helper.lastname}
              businessField={helper.businessField}
              activityDescription={helper.activityDescription}
              links={helper.links}
              reference={helper.reference}
              timeAvailability={helper.timeAvailability}
              projectArea={helper.projectArea}
            ></Helper>
          ))}{' '}
          <div className="bg-grey flex flex-col justify-center items-center p-8">
            <p className="font-body text-grey-light text-base pb-3 text-center">
              Pokud jste nenašli správnou osobu, přidejte váš projekt.
            </p>
            <Link href="/new_project">
              <a className="border-green border-solid border-2 rounded-md font-title text-grey-light text-2xl  hover:bg-green hover:bg-opacity-100 p-2 font-extralight">
                Registrační formulář pro projekty
              </a>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
