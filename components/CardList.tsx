import React, { useState, useEffect, useRef } from "react";
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
  const allFilteredItems = useRef(items);

  useEffect(() => {
    console.log("useEffect hit");
    filter(nameFilter, officeFilter).then((data) => {
      allFilteredItems.current = data;
      setDisplayedItems(() => allFilteredItems.current.slice(0, 20));
    });
  }, [nameFilter, officeFilter]);

  const getMoreItems = async () => {
    var next = displayedItems.length + 20;

    let data: Employee[] = await ApiHelper.getEmployees(next);

    var newItems = data.slice(displayedItems.length, next);

    setDisplayedItems((items) => [...items, ...newItems]);
  };

  const getMoreFilteredItems = async () => {
    var next = displayedItems.length + 20;
    var newItems = allFilteredItems.current.slice(displayedItems.length, next);
    setDisplayedItems((items) => [...items, ...newItems]);
  };

  const filter = async (name: string, office: string) => {
    console.log("Filter");
    let data: Employee[];
    if (name || office)
      data = await ApiHelper.getEmployees(
        0,
        name ? name : "",
        office ? office : ""
      );
    else data = items;
    return data;
  };

  const filtered = nameFilter.length > 0 || officeFilter.length > 0;
  const max = filtered ? allFilteredItems.current.length : totalCount;
  const hasMore = displayedItems.length < max;

  return (
    <InfiniteScroll
      dataLength={displayedItems.length}
      next={filtered ? getMoreFilteredItems : getMoreItems}
      hasMore={hasMore}
      loader={<Loader key={0} />}
      endMessage={<p> </p>}>
      <section data-cy="items" className={styles.cards}>
        {displayedItems.map((item: Employee, i) => (
          <CardItem key={item.name} item={item} />
        ))}
      </section>
    </InfiniteScroll>
  );
}

export default CardList;
