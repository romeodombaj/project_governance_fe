import styles from "./ActivityElement.module.css";
import React from "react";


const ActivityElement = (props) => {
  const activity = props.activity;

  return (
    <div
      index={props.index}
      onClick={props.onClick}
      style={{
        width: `${activity.duration * 2}rem`,
        marginLeft: `${activity.earlyStartTime * 2}rem`,
      }}
      className={`${styles.wrapper}`}
    >
      {activity.i}
    </div>
  );
};

export default ActivityElement;
