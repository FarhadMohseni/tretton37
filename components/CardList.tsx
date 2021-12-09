import React from "react";
import styles from "../styles/CardList.module.css";
function FilterByName() {
  return (
    <div>
      <section className={styles.cards}>
        <div className={styles.item}>
          <div className={styles.card}>
            <img src="mozart.jpg" className="card_image" />
            <div className={styles.card_overlay}>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-github-square"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className={styles.item_text_container}>
            <span className={styles.name}>Farhad Mohseni</span>
            <span className={styles.office}>Stockholm</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <img src="mozart.jpg" className="card_image" />
            <div className={styles.card_overlay}>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-github-square"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className={styles.item_text_container}>
            <span className={styles.name}>Farhad Mohseni</span>
            <span className={styles.office}>Stockholm</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <img src="mozart.jpg" className="card_image" />
            <div className={styles.card_overlay}>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-github-square"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className={styles.item_text_container}>
            <span className={styles.name}>Farhad Mohseni</span>
            <span className={styles.office}>Stockholm</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <img src="mozart.jpg" className="card_image" />
            <div className={styles.card_overlay}>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-github-square"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className={styles.item_text_container}>
            <span className={styles.name}>Farhad Mohseni</span>
            <span className={styles.office}>Stockholm</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <img src="mozart.jpg" className="card_image" />
            <div className={styles.card_overlay}>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-github-square"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className={styles.item_text_container}>
            <span className={styles.name}>Farhad Mohseni</span>
            <span className={styles.office}>Stockholm</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <img src="mozart.jpg" className="card_image" />
            <div className={styles.card_overlay}>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-github-square"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className={styles.item_text_container}>
            <span className={styles.name}>Farhad Mohseni</span>
            <span className={styles.office}>Stockholm</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FilterByName;
