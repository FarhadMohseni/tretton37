import React from "react";
import styles from "../styles/CardItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";

function CardItem() {
  return (
    <div className={styles.item}>
      <style>{dom.css()}</style>
      <div className={styles.card}>
        <img src="mozart.jpg" className="card_image" />
        <div className={styles.card_overlay}>
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className={styles.card_overlay_icon}
          />
          <FontAwesomeIcon
            icon={faGithubSquare}
            className={styles.card_overlay_icon}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles.card_overlay_icon}
          />
        </div>
      </div>
      <div className={styles.item_text_container}>
        <span className={styles.name}>Farhad Mohseni</span>
        <span className={styles.office}>Stockholm</span>
      </div>
    </div>
  );
}

export default CardItem;
