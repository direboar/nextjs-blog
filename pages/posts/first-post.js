import Head from "next/head";
import Link from "next/link";

import Layout from '../../components/layout'

const name = "Eiji Iizuka.";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post posted by {name}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
