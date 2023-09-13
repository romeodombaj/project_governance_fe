import { useEffect } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  let data = props.data;

  return (
    <select className={styles.wrapper} onChange={props.onChange}>
      {data &&
        props.data.map((option, i) => {
          return (
            <option key={i} className={styles.option}>
              {option.name}
            </option>
          );
        })}
    </select>
  );
};

export default Dropdown;
