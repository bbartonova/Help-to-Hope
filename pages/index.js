import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import LandingArticle from '../components/landing/LandingArticle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Help to Hope</title>
        <meta
          name="projekt Help to Hope"
          content="pomůžeme naději být více vidět v online světě"
        />
      </Head>
      <Layout isLandingPage={true}>
        <main className="flex flex-col sm:flex-row sm:justify-around sm:max-h-full">
          <LandingArticle
            title="Pomáhám a přináším tak naději druhým"
            text="Potřebuji být více vidět v online světě"
            link="/projects"
            align="left"
          />
          <Image
            src="/ruka_srdce.png"
            alt="ruka"
            width={200}
            height={200}
            className="object-contain"
          ></Image>
          <LandingArticle
            title="Chci pomáhat naději"
            text="být více vidět v online světě"
            link="/helper"
            align="right"
          />
        </main>
      </Layout>
    </>
  );
}
