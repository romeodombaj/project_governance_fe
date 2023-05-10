import { Fragment } from "react";
import styles from "./PanelTemplate.module.css";
import NavBar from "../navigation/NavBar";

const PanelTemplate = (props) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <NavBar />
        <div className={styles[`panel-wrapper`]}>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default PanelTemplate;
