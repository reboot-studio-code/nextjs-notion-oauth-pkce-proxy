import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Hello this is a notion PKCE proxy example built with Next.js by Reboot
          Studio
        </h1>
      </main>
    </div>
  );
};

export default Home;
