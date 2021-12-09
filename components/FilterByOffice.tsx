import React from "react";
import styles from "../styles/FilterByOffice.module.css";
function FilterByName() {
  return (
    <div className={styles.header_filter_office}>
      <select className={styles.header_filter_office_select}>
        <option value="Office1">Office 1</option>
        <option value="Office1">Office 2</option>
        <option value="Office1">Office 3</option>
        <option value="Office1">Office 4</option>
        <option value="Office1">Office 5</option>
      </select>
    </div>
  );
}

export default FilterByName;
