import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Project from '../components/projects/Project';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listNewProjects } from '../src/graphql/queries';
import { Select } from 'antd';

const defaultFilterValue = 'všechny projekty';
export default function Helper() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    API.graphql(graphqlOperation(listNewProjects)).then((response) => {
      console.log(response);
      setProjects(response.data.listNewProjects.items);

      setCategories([
        ...new Set([
          defaultFilterValue,
          ...response.data.listNewProjects.items.map(
            (project) => project.businessField,
          ),
        ]),
      ]);
    });
  }, []);
  const onFilterChange = (value) => {
    API.graphql(
      graphqlOperation(listNewProjects, {
        filter: {
          businessField: {
            contains: value === defaultFilterValue ? '' : value,
          },
        },
      }),
    ).then((response) => {
      setProjects(response.data.listNewProjects.items);
    });
  };

  return (
    <>
      <Head>
        <title>Chci pomáhat</title>
        <meta name="chci pomáhat" content="výpis registrovaných projektů" />
      </Head>
      <Layout isLandingPage={false}>
        <main className="min-h-screen">
          <div className="bg-helper-backround bg-cover bg-right-top lg:bg-top xl:bg-right-top flex justify-between">
            <div className="flex justify-end flex-col text-center md:text-left p-8 bg-white bg-opacity-80 lg:bg-transparent lg:w-1/2">
              <h1 className="font-title text-green text-5xl">Chci pomáhat</h1>
              <h2 className="font-title text-grey text-4xl pt-4">
                Kdo může pomáhat
              </h2>
              <p className="font-body text-grey-dark text-base pb-3">
                Projekt Help to Hope má pomáhat "naději" být lépe vidět v online
                světě. Pokud jste IT odborník, nebo se pohybujete v online světě
                a především máte chuť bezištně pomáhat, jste na správném místě.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Být lépe vidět znamená přinést naději více lidem. Chceme dělat
                naději dostupnější.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Pokud máte chuť pomáhat, my vás propojíme s vhodným
                projektem-nadějí.
              </p>
              <h2 className="font-title text-grey text-4xl pt-4">
                Komu můžete pomoci
              </h2>
              <p className="font-body text-grey-dark text-base pb-3">
                Níže najdete přehled projektů, které potřebují pomoct a přidlali
                se k projektu Help to Hope.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Pro snadnější hledání vhodného projektu, využijte možnost
                filtrování podle oblasti činnosti.
              </p>
              <p className="font-body text-grey-dark text-base pb-3">
                Po kliknutí na Další informace se vám zobrazí všechny informace
                o prokektu. Pokud budete mít zájem o spolupráci, klikněte na
                Chci pomoct a my vás propojíme.
              </p>
              <h2 className="font-title text-grey text-4xl pt-4">
                Další možnosti
              </h2>
              <p className="font-body text-grey-dark text-base pb-3">
                Pokud v naši nabídce nenajdete správný projekt a přesto chcete
                pomáhat, můžete se zaregistrovat. Registrované IT odborníky
                prochází zájemci s projekty. Odkaz na registraci najdete níže.
              </p>
            </div>
            <div className="lg:w-1/2"></div>
          </div>
          <div className="bg-grey flex flex-col justify-center items-center p-8">
            <h2 className="font-title text-grey-light text-4xl pt-4 text-center">
              Seznam registrovaných projektů
            </h2>
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
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              businessField={project.businessField}
              name={project.name}
              eactivityDescription={project.eactivityDescription}
              projectPurpose={project.projectPurpose}
              fullname={project.fullname}
              organization={project.organization}
              phonenumber={project.phonenumber}
              email={project.email}
              oldWeb={project.oldWeb}
              links={project.links}
              experiences={project.experiences}
              reward={project.reward}
            ></Project>
          ))}
          <div className="bg-grey flex flex-col justify-center items-center p-8">
            <p className="font-body text-grey-light text-base pb-3 text-center">
              Pokud jste nenašli správný projekt a chcete pomáhat, zaregistrujte
              se.
            </p>
            <Link href="/new_helper">
              <a className="border-green border-solid border-2 rounded-md font-title text-grey-light text-2xl  hover:bg-green hover:bg-opacity-100 p-2 font-extralight">
                Registrační formulář
              </a>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
