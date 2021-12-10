import React, { useState, createContext } from "react";
import styles from "../styles/FilterByName.module.css";
interface Props {
  getFilter: Function;
}

function FilterByName({ getFilter }: Props) {
  const [text, setText] = useState("");
  const onChange = (text: string) => {
    setText(text);
    getFilter(text);
  };
  return (
    <input
      type="text"
      value={text}
      placeholder="Search employees"
      onChange={(e) => onChange(e.target.value)}
      className={styles.header_filter_employee}
    />
  );
}

export default FilterByName;
