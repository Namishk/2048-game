import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>2048 Game</title>
        <meta name="description" content="2048 game implemented by namish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
}
