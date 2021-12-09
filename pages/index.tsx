import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FilterByName from "../components/FilterByName";
import FilterByOffice from "../components/FilterByOffice";
import CardList from "../components/CardList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Fellowship of the tretton37" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={styles.header}>
        <div className={styles.header_text}>
          <p>The fellowship of the tretton37</p>
        </div>
        <div className={styles.header_filter}>
          <FilterByName />
          <FilterByOffice />
        </div>
      </section>
      <CardList />
    </div>
  );
};

export default Home;
