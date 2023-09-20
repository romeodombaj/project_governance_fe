import { useEffect } from "react";
import styles from "./Front.module.css";
import { Link } from "react-router-dom";
import NavigationContext from "./store/navigation-context";
import { useContext } from "react";
import React from "react";
import LineContext from "./store/line-context";

const Front = () => {
  const navCtx = useContext(NavigationContext);
  const lineCtx = useContext(LineContext);

  useEffect(() => {
    navCtx.resetOpen();
    lineCtx.setCurrentManager();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Link to="/hr" className={styles.button}>
        Human Resources
      </Link>
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
