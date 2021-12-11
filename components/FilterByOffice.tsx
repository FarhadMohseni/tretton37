import React, { useState } from "react";
import styles from "../styles/FilterByOffice.module.css";
interface Props {
  offices: Array<string>;
  getFilter: Function;
}

function FilterByOffice({ offices, getFilter }: Props) {
  const [office, setOffice] = useState("");
  const onChange = (value: string) => {
    setOffice(value);
    getFilter(value);
  };
  return (
    <div className={styles.header_filter_office}>
      <select
        data-cy="selectOffice"
        onChange={(e) => onChange(e.currentTarget.value)}
        className={styles.header_filter_office_select}>
        <option value="">All</option>
        {offices.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterByOffice;
