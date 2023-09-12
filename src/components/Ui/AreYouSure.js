import { Fragment } from "react";
import styles from "./AreYouSure.module.css";
import Modal from "./Modal";
import Button from "./Button";

const AreYouSure = (props) => {
  return (
    <Fragment>
      {props.prompt && (
        <Modal>
          <div className={styles.wrapper}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.separator} />
            <div className={styles.actions}>
              <Button onClick={props.yes} color="red">
                Yes
              </Button>
              <Button onClick={props.no}>NO</Button>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default AreYouSure;
