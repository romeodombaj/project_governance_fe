import styles from "./Front.module.css";
import { Link } from "react-router-dom";

const Front = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/line" className={styles.button}>
        Line Managment
      </Link>
      <Link to="/project" className={styles.button}>
        Project Managment
      </Link>
      <Link to="/process" className={styles.button}>
        Process Managment
      </Link>
    </div>
  );
};

export default Front;
