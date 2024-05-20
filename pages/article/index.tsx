import Head from "next/head";
import Articles from "@/components/Articles";

export default function Article() {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Articles Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Articles />
    </>
  );
}
