import React from "react";
import styles from "../styles/CardList.module.css";
import CardItem from "../components/CardItem";

import axios from "axios";
import { GetServerSideProps } from "next";
interface Props {
  items: string; // your props validation
}
function FilterByName(props: Props) {
  return (
    <div>
      <section className={styles.cards}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </section>
    </div>
  );
}

export default FilterByName;
