import styles from "./ActivityElement.module.css";
import React, { Fragment } from "react";

const ActivityElement = (props) => {
  const activity = props.activity;

  console.log(activity);

  return (
    <Fragment>
      <div
        className={styles.variation}
        style={{
          width: `${(activity.lastFinishTime - activity.earlyStartTime) *
            2}rem`,
          left: `${activity.earlyStartTime * 2}rem`,
          top: `${activity.featureIndex * 3.5 + 1.8}rem`,
        }}
      />
      <div
        index={props.index}
        onClick={props.onClick}
        style={{
          width: `${activity.duration * 2}rem`,
          marginLeft: `${activity.earlyStartTime * 2}rem`,
        }}
        className={`${styles.wrapper} ${styles[activity.finished && "done"]}`}
      >
        {activity.i}
      </div>
    </Fragment>
  );
};

export default ActivityElement;
