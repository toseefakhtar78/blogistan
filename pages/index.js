import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts';
import SearchComponent from "./SearchComponent";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241486495309147"
     crossorigin="anonymous"></script>
      </Head>
      <section className={utilStyles.headingMd}>
        <p align='center'>Unveiling Trends in Politics, Fashion, and Sports.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <SearchComponent data={allPostsData} />
      </section>
    </Layout>
  );
}