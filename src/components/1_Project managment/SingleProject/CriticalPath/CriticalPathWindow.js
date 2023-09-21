import { Fragment, useState } from "react";
import ActivityElement from "./ActivityElement";
import styles from "./CriticalPathWindow.module.css";
import EditActivity from "./EditActivity";
import React from "react";

const CriticalPathWindow = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const criticalPathData = props.criticalPathData;
  const requestData = props.requestData;
  const [activityIndex, setActivityIndex] = useState(0);

  let columns = [];
  let max = 0;

  const editActivity = (e) => {
    const index = e.currentTarget.getAttribute("index");
    setActivityIndex(index);

    openEdit();
  };

  const openEdit = () => {
    setIsEditing(true);
  };

  const closeEdit = () => {
    setIsEditing(false);
  };

  if (criticalPathData) {
    max = Math.max(
      ...criticalPathData.calculatedArray.map((el) => el.lastFinishTime)
    );

    max += 3;

    if (max < 60) {
      max = 60;
    }
  }

  for (let i = 1; i < max; i++) {
    columns.push(
      <div
        key={i}
        style={{ left: `${i * 2}rem` }}
        className={styles.line}
      ></div>
    );
  }

  return (
    <Fragment>
      {isEditing && (
        <EditActivity
          criticalData={criticalPathData}
          requestData={requestData[activityIndex]}
          onClose={closeEdit}
          index={activityIndex}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.graph}>
          <div className={styles.activities}>
            {criticalPathData &&
              criticalPathData.calculatedArray.map((activity, i) => {
                return (
                  <ActivityElement
                    onClick={editActivity}
                    key={i}
                    index={i}
                    activity={activity}
                  />
                );
              })}
          </div>
          <div className={styles["background-lines"]}>{columns}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default CriticalPathWindow;
