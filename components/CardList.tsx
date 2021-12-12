import React, { useState, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/CardList.module.css";
import CardItem from "../components/CardItem";
import Employee from "../interfaces/employee";
import ApiHelper from "../helpers/ApiHelper";
import Loader from "./Loader";

interface Props {
  items: Array<Employee>;
  totalCount: Number;
  nameFilter: string;
  officeFilter: string;
}

function CardList({ items, totalCount, nameFilter, officeFilter }: Props) {
  const [displayedItems, setDisplayedItems] = useState(items);

  const getMoreItems = async () => {
    var next = displayedItems.length + 20;

    let data: Employee[] = await ApiHelper.getEmployees(next);

    var newItems = data.slice(displayedItems.length, next);

    setDisplayedItems((items) => [...items, ...newItems]);
  };

  const hasMore = displayedItems.length < totalCount;

  return (
    <InfiniteScroll
      dataLength={displayedItems.length}
      next={getMoreItems}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<p> </p>}>
      <section data-cy="items" className={styles.cards}>
        {displayedItems
          .filter((item) =>
            nameFilter === "" ? item.name : item.name.includes(nameFilter)
          )
          .filter((item) =>
            officeFilter === "" ? item.name : item.office.includes(officeFilter)
          )
          .map((item: Employee) => (
            <CardItem item={item} />
          ))}
      </section>
    </InfiniteScroll>
  );
}

export default CardList;
