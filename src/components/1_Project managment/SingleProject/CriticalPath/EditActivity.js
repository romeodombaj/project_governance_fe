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
  const selectedCritical = props.criticalData.calculatedArray[index];

  const patchData = usePatchData();

  const onComplete = () => {
    let tempSelectedCritical = selectedCritical;
    let tempCritical = criticalData;

    tempSelectedCritical.finished = true;

    criticalData.calculatedArray[index] = tempSelectedCritical;

    patchData(criticalData, `critical_paths/update/${criticalData._id}`);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{selectedCritical.i}</div>
        <div className={styles.devider} />
        {requestData && requestData.approved && (
          <Fragment>
            <div>
              <strong>Assigned employee: </strong> {requestData.employee}
            </div>
            <div className={styles.devider} />
            <div>
              <strong>Duration:</strong> {selectedCritical.duration} weeks
            </div>
            <div className={styles.devider} />
            <div>
              <strong>Planned start date:</strong> {selectedCritical.startDate}
            </div>
            <div className={styles.devider} />
            <div>
              <strong>Planned end date:</strong> {selectedCritical.finishDate}
            </div>
          </Fragment>
        )}
        <div className={styles.devider} />
        <div className={styles.devider} />
        <div>
          <strong>STATUS: </strong>
          {requestData && requestData.approved
            ? selectedCritical.finished
              ? "completed"
              : "in progress"
            : "Waiting for employee asignment"}
        </div>
        <div className={styles.devider} />

        {requestData && requestData.approved && !selectedCritical.finished && (
          <Button onClick={onComplete} isLight={true}>
            Complete
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default EditActivity;
