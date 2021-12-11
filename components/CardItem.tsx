import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import Item from "../interfaces/item";
import styles from "../styles/CardItem.module.css";
interface Props {
  item: Item;
}

function CardItem({ item }: Props) {
  let twitter = item.twitter ? (
    <a target="_blank" href={`https://twitter.com/${item.twitter}`}>
      <FontAwesomeIcon
        icon={faTwitterSquare}
        className={styles.card_overlay_icon}
      />
    </a>
  ) : null;

  let linkedIn = item.linkedIn ? (
    <a target="_blank" href={`https://linkedIn.com${item.linkedIn}`}>
      <FontAwesomeIcon icon={faLinkedin} className={styles.card_overlay_icon} />
    </a>
  ) : null;

  let github = item.github ? (
    <a target="_blank" href={`https://github.com/${item.github}`}>
      <FontAwesomeIcon
        icon={faGithubSquare}
        className={styles.card_overlay_icon}
      />
    </a>
  ) : null;

  return (
    <div data-cy="dataItem" className={styles.item}>
      <style>{dom.css()}</style>
      <div className={styles.card}>
        <img
          src={item.imagePortraitUrl ? item.imagePortraitUrl : "fallBack.png"}
          className="card_image"
        />
        <div className={styles.card_overlay}>
          {twitter}
          {linkedIn}
          {github}
        </div>
      </div>
      <div className={styles.item_text_container}>
        <span data-cy="dataName" className={styles.name}>
          {item.name}
        </span>
        <span data-cy="dataOffice" className={styles.office}>
          {item.office}
        </span>
      </div>
    </div>
  );
}

export default CardItem;
