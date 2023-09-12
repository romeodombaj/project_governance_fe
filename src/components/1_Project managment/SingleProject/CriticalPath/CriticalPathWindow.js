import ActivityElement from "./ActivityElement";
import styles from "./CriticalPathWindow.module.css";

const CriticalPathWindow = (props) => {
  const criticalPathData = props.criticalPathData;
  let columns = [];
  let max = 0;


  if (criticalPathData) {
    max = Math.max(
      ...criticalPathData.calculatedArray.map((el) => el.lastFinishTime)
    );
    max += 3;
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
    <div className={styles.wrapper}>
      <div className={styles.graph}>
        <div className={styles.activities}>
          {criticalPathData &&
            criticalPathData.calculatedArray.map((activity, i) => {
              return <ActivityElement key={i} activity={activity} />;
            })}
        </div>
        <div className={styles["background-lines"]}>{columns}</div>
      </div>
    </div>
  );
};

export default CriticalPathWindow;
