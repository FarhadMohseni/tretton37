import React, { useState, useContext } from "react";

import styles from "../styles/CardList.module.css";
import CardItem from "../components/CardItem";
import Item from "../interfaces/item";

import InfiniteScroll from "react-infinite-scroll-component";
interface Props {
  items: Array<Item>;
  nameFilter: string;
}

function CardList({ items, nameFilter }: Props) {
  //Filter null images from the items

  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 9));
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
      endMessage={<h4>Yay! You've met all of our collegues</h4>}>
      <div>
        <section className={styles.cards}>
          {displayedItems
            .filter((item) =>
              nameFilter === "" ? item.name : item.name.includes(nameFilter)
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
