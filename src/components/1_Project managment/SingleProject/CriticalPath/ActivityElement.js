import styles from "./ActivityElement.module.css";
import React, { Fragment } from "react";

const ActivityElement = (props) => {
  const activity = props.activity;

  return (
    <Fragment>
      <div
        className={styles.variation}
        style={{
          width: `${(activity.lastFinishTime - activity.earlyStartTime) *
            4}rem`,
          left: `${activity.earlyStartTime * 4 + activity.delay * 4}rem`,
          top: `${activity.featureIndex * 3.5 + 1.8}rem`,
        }}
      />
      <div
        className={styles.delay}
        style={{
          width: `${activity.delay * 4}rem`,
          left: `${activity.earlyStartTime * 4}rem`,
          top: `${activity.featureIndex * 3.5 + 1.8}rem`,
        }}
      >
        {activity.delay > 0 && (
          <div className={styles["delay-text"]}>{activity.delay} week(s)</div>
        )}
      </div>
      <div
        index={props.index}
        onClick={props.onClick}
        style={{
          width: `${activity.duration * 4}rem`,
          marginLeft: `${activity.earlyStartTime * 4 + activity.delay * 4}rem`,
        }}
        className={`${styles.wrapper} ${styles[activity.finished && "done"]}`}
      >
        {activity.i}
      </div>
    </Fragment>
  );
};

export default ActivityElement;
