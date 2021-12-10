import type { GetServerSideProps, NextPage } from "next";
import { useState, useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import FilterByName from "../components/FilterByName";
import FilterByOffice from "../components/FilterByOffice";
import CardList from "../components/CardList";
import Item from "../interfaces/item";
import axios from "axios";

const Home: NextPage = (props: any) => {
  var items: [Item] = props.data;
  var offices = [...new Set(items.map((item) => item.office))];

  const [nameFilter, setNameFilter] = useState("");
  const [officeFilter, setOfficeFilter] = useState("");
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
          <FilterByName getFilter={(filter: string) => setNameFilter(filter)} />
          <FilterByOffice
            getFilter={(filter: string) => setOfficeFilter(filter)}
            offices={Array.from(offices)}
          />
        </div>
      </section>
      <CardList
        nameFilter={nameFilter}
        officeFilter={officeFilter}
        items={items}
      />
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
  if (!data) {
    return {
      notFound: true,
    };
  }
  data = data.filter((i: Item) => i.published);
  // Pass data to the page via props
  return { props: { data } };
};
export default Home;
