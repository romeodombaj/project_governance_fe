import styles from "./Label.module.css";
import React from "react";

const Label = (props) => {
  return <label className={styles.wrapper}>{props.children}</label>;
};

export default Label;
