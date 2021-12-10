import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FilterByName from "../components/FilterByName";
import FilterByOffice from "../components/FilterByOffice";
import CardList from "../components/CardList";
import axios from "axios";

const Home: NextPage = (props: any) => {
  console.log(props.data);
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
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://api.1337co.de/v3/employees", {
    headers: {
      Authorization: process.env.API_KEY, //the token is a variable which holds the token
    },
  });
  var data = res.data;
  // Pass data to the page via props
  return { props: { data } };
};
export default Home;
