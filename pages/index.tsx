import Head from "next/head";
import SavingForm from "../components/SavingForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Frontend</title>
        <meta name="description" content="Test Frontend App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SavingForm />
    </>
  );
}
