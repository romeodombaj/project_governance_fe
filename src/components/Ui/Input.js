import styles from "./Input.module.css";
import React from "react";

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      index={props.index}
      onChange={props.onChange}
      value={props.value}
      className={`${styles.wrapper} ${
        styles[props.error && props.error != "" && "error"]
      }`}
    />
  );
};

export default Input;
