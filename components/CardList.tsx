import React from "react";
import styles from "../styles/CardList.module.css";
import CardItem from "../components/CardItem";
function FilterByName() {
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
