import styles from "./ScoreCard.module.css";
import React from "react";

const ScoreCard = (props) => {
  const val = props.value;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.filler} ${styles[val > 0 && "num1"]}`}></div>
      <div className={`${styles.filler} ${styles[val > 1 && "num2"]}`}></div>
      <div className={`${styles.filler} ${styles[val > 2 && "num3"]}`}></div>
      <div className={`${styles.filler} ${styles[val > 3 && "num4"]}`}></div>
      <div className={`${styles.filler} ${styles[val > 4 && "num5"]}`}></div>
    </div>
  );
};

export default ScoreCard;
