import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import LandingArticle from '../components/landing/LandingArticle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Help to Hope</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout isLandingPage={true}>
        <main className="flex justify-around max-h-full font-title">
          <LandingArticle
            title="Pomáhám a přináším tak naději druhým"
            text="Potřebuji být více vidět v online světě"
            link="/projects"
            align="left"
          />
          <Image
            src="/img_HtH.png"
            alt="ruka"
            width={200}
            height={200}
            className="object-contain flex-shrink-0"
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
