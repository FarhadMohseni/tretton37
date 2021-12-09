import React from "react";
import styles from "../styles/FilterByName.module.css";
function FilterByName() {
  return (
    <input
      type="text"
      placeholder="Search employees"
      className={styles.header_filter_employee}
    />
  );
}

export default FilterByName;
