import { Fragment } from "react";
import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <Fragment>
      {props.value != "" && <div className={styles.wrapper}>{props.value}</div>}
    </Fragment>
  );
};

export default Error;
