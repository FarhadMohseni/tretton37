import type { GetServerSideProps, NextPage } from "next";
import { useState, useContext } from "react";
import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.css";
import FilterByName from "../components/FilterByName";
import FilterByOffice from "../components/FilterByOffice";
import CardList from "../components/CardList";
import ApiHelper from "../helpers/ApiHelper";
import Employee from "../interfaces/employee";
const Home: NextPage = (props: any) => {
  var items: Employee[] = props.data;
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
          <p data-cy="homeText">The fellowship of the tretton37</p>
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
  let data: Employee[] = await ApiHelper.getEmployees(10);
  if (!data) {
    return {
      notFound: true,
    };
  }
  // Pass data to the page via props
  return { props: { data } };
};

export default Home;
