import { type NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact/Contact";

import Title from "../components/Title/Title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>warner systems</title>
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="warner systems" />
        <meta name="og:description" property="og:description" content="web design seo app developement" />
        <meta property="og:site_name" content="warner systems" />
        <meta name="description" content="warner systems web design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen flex-col items-center justify-between">
        <h2>
        </h2>
        <h1 >
          <Title />
        </h1>
      </main>
    </>
  );
};



export default Home;

