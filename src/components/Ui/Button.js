import styles from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      type={props.type}
      onClick={props.onClick}
      data={props.data}
      className={`${styles.wrapper} ${styles[props.isLight && "light"]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
