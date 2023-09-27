import { Fragment, useEffect, useState } from "react";
import ActivityElement from "./ActivityElement";
import styles from "./CriticalPathWindow.module.css";
import EditActivity from "./EditActivity";
import React from "react";

const CriticalPathWindow = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const criticalPathData = props.criticalPathData;
  const requestData = props.requestData;
  const [activityIndex, setActivityIndex] = useState(0);
  const projectData = props.projectData;

  let columns = [];
  let max = 0;
  let endDateMargin = 0;
  let delay = 0;

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

    endDateMargin = max;
    delay =
      criticalPathData.calculatedArray[
        criticalPathData.calculatedArray.length - 1
      ].delay + max;

    max += 3;

    if (max < 60) {
      max = 60;
    }
  }

  for (let i = 1; i < max; i++) {
    let outputDate = "";
    if (criticalPathData) {
      let tempDate = new Date(criticalPathData.calculatedArray[0].startDate);
      tempDate.setDate(tempDate.getDate() + i * 7);
      outputDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1);
    }

    columns.push(
      <Fragment key={i}>
        <div style={{ left: `${i * 4}rem` }} className={styles.line}></div>
        <div
          className={styles["background-dates"]}
          style={{ left: `${i * 4 + 0.5}rem` }}
        >
          {outputDate}
        </div>
      </Fragment>
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
          <div className={styles["background-lines"]}>
            {columns}
            <div className={styles["start-border-line"]}></div>
            <div
              className={styles["border-line"]}
              style={{ left: `${endDateMargin && endDateMargin * 4}rem` }}
            ></div>
            {delay != 0 && (
              <div
                className={styles["end-border-line"]}
                style={{
                  left: `${delay && delay * 4}rem`,
                }}
              ></div>
            )}

            <div className={styles["start-date"]}>
              {criticalPathData &&
                criticalPathData.calculatedArray[0].startDate}
            </div>
            <div
              className={styles["end-date"]}
              style={{ left: `${endDateMargin && endDateMargin * 4 + 1}rem` }}
            >
              {criticalPathData &&
                criticalPathData.calculatedArray[
                  criticalPathData.calculatedArray.length - 1
                ].finishDate}
            </div>
            <div
              className={styles["delay-date"]}
              style={{
                left: `${delay && delay * 4 + 1}rem`,
              }}
            >
              {projectData && projectData.delayedEndDate}
            </div>
            <div className={styles["backgorund-dates"]}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CriticalPathWindow;
