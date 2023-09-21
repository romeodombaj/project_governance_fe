import { useEffect } from "react";
import React from "react";

import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  let data = props.data;

  console.log(data);

  return (
    <select
      className={styles.wrapper}
      onChange={props.onChange}
      index={props.index}
    >
      {data &&
        data.map((option, i) => {
          return (
            <option key={i} className={styles.option}>
              {option.name && option.name}
            </option>
          );
        })}
    </select>
  );
};
  
export default Dropdown;
