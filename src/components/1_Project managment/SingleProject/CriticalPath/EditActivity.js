import { useState } from "react";
import Modal from "../../../Ui/Modal";
import styles from "./EditActivity.module.css";
import usePatchData from "../../../hooks/use-patch-data";
import React from "react";
import Button from "../../../Ui/Button";
import { Fragment } from "react";
const EditActivity = (props) => {
  const criticalData = props.criticalData;
  const requestData = props.requestData;
  const index = props.index;
  const selectedCtirical = props.criticalData.calculatedArray[index];

  const patchData = usePatchData();

  const onComplete = () => {
    let tempSelectedCritical = selectedCtirical;
    let tempCritical = criticalData;

    tempSelectedCritical.finished = true;

    criticalData.calculatedArray[index] = tempSelectedCritical;

    patchData(criticalData, `critical_paths/update/${criticalData._id}`);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{selectedCtirical.i}</div>
        <div className={styles.devider} />
        {requestData && requestData.approved && (
          <Fragment>
            <div>
              <strong>Assigned employee: </strong> {requestData.employee}
            </div>
            <div>
              <strong>Planed start date:</strong> {requestData.employee}
            </div>
          </Fragment>
        )}
        <div className={styles.devider} />

        <div className={styles.devider} />

        <div>
          <strong>STATUS: </strong>
          {selectedCtirical.finished ? "completed" : "in progress"}
        </div>
        <div className={styles.devider} />

        {requestData && requestData.approved && !selectedCtirical.finished && (
          <Button onClick={onComplete} isLight={true}>
            Complete
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default EditActivity;
