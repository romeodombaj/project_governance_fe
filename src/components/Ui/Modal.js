import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  const onCloseHandler = () => {
    props.onClose();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={onCloseHandler} />
          <div className={styles.wrapper}>{props.children}</div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
