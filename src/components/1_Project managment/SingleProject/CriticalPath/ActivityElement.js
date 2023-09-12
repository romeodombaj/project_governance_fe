import styles from "./ActivityElement.module.css";

const ActivityElement = (props) => {
  const activity = props.activity;

  return (
    <div
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
