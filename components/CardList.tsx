import React, { useState, useContext } from "react";

import styles from "../styles/CardList.module.css";
import CardItem from "../components/CardItem";
import Item from "../interfaces/item";

import InfiniteScroll from "react-infinite-scroll-component";
interface Props {
  items: Array<Item>;
  nameFilter: string;
  officeFilter: string;
}

function CardList({ items, nameFilter, officeFilter }: Props) {
  //Filter null images from the items

  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 10));
  const getMoreItems = () => {
    var newItems = items.slice(
      displayedItems.length,
      displayedItems.length + 9
    );
    setDisplayedItems((items) => [...items, ...newItems]);
  };
  const hasMore = displayedItems.length < items.length;

  return (
    <InfiniteScroll
      dataLength={displayedItems.length}
      next={getMoreItems}
      hasMore={hasMore}
      loader={<p> </p>}
      endMessage={<p> </p>}>
      <div>
        <section className={styles.cards}>
          {displayedItems
            .filter((item) =>
              nameFilter === "" ? item.name : item.name.includes(nameFilter)
            )
            .filter((item) =>
              officeFilter === ""
                ? item.name
                : item.office.includes(officeFilter)
            )
            .map((item: Item) => (
              <CardItem item={item} />
            ))}
        </section>
      </div>
    </InfiniteScroll>
  );
}

export default CardList;
