import styles from "./LineManagmentPanel.module.css";
import LineGroups from "./LineGroups";
import LineEmployees from "./LineEmployees";

const LineManagmentPanel = () => {
  return (
    <div className={styles.wrapper}>
      <LineGroups />
      <LineEmployees />
    </div>
  );
};

export default LineManagmentPanel;
