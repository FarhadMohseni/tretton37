import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import FilterByName from "../components/FilterByName";
import FilterByOffice from "../components/FilterByOffice";
import CardList from "../components/CardList";
import ApiHelper from "../helpers/ApiHelper";
import Employee from "../interfaces/employee";
const Home: NextPage = (props: any) => {
  var employees: Employee[] = props.employees;
  var totalCount: Number = props.totalCount;
  var offices = [...new Set(employees.map((item) => item.office))];

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
        items={employees}
        totalCount={totalCount}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    let employees: Employee[] = await ApiHelper.getEmployees(20);

    let totalCount: Number = await ApiHelper.getEmployeesCount();

    if (!employees || !totalCount) {
      return {
        notFound: true,
      };
    }

    // Pass data to the page via props

    return { props: { employees, totalCount } };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Home;
