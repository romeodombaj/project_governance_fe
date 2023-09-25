import { useState } from "react";
import Modal from "../../../Ui/Modal";
import styles from "./EditActivity.module.css";
import usePatchData from "../../../hooks/use-patch-data";
import React from "react";
import Button from "../../../Ui/Button";
import { Fragment } from "react";
import Input from "../../../Ui/Input";

const EditActivity = (props) => {
  const criticalData = props.criticalData;
  const requestData = props.requestData;
  const index = props.index;
  const selectedCritical = props.criticalData.calculatedArray[index];
  const [delay, setDelay] = useState(0);

  const onDelayChange = (e) => {
    const value = e.target.value;
    setDelay(value);
  };

  const patchData = usePatchData();

  const onSubmitDelay = (e) => {
    e.preventDefault();

    for (
      let i = parseInt(index) + 1;
      i < criticalData.calculatedArray.length;
      i++
    ) {
      criticalData.calculatedArray[i].delay -=
        criticalData.calculatedArray[parseInt(index)].delay;
    }

    if (index > 0) {
      criticalData.calculatedArray[parseInt(index)].delay -=
        criticalData.calculatedArray[parseInt(index)].delay -
        criticalData.calculatedArray[parseInt(index) - 1].delay;
    } else {
      criticalData.calculatedArray[parseInt(index)].delay -=
        criticalData.calculatedArray[parseInt(index)].delay;
    }

    criticalData.calculatedArray[index].delay += parseInt(delay);

    for (
      let i = parseInt(index) + 1;
      i < criticalData.calculatedArray.length;
      i++
    ) {
      criticalData.calculatedArray[i].delay +=
        criticalData.calculatedArray[index].delay;
    }

    patchData(criticalData, `critical_paths/update/${criticalData._id}`);
    props.onClose();
  };

  const onComplete = () => {
    let tempSelectedCritical = selectedCritical;

    tempSelectedCritical.finished = true;

    criticalData.calculatedArray[index] = tempSelectedCritical;

    patchData(criticalData, `critical_paths/update/${criticalData._id}`);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        <div>
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
                <strong>Planned start date:</strong>
                {selectedCritical.startDate}
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
        {requestData && requestData.approved && !selectedCritical.finished && (
          <div className={styles["delay-wrapper"]}>
            <div className={styles.title}>Add delay</div>
            <div className={styles.devider} />

            <div>
              <strong>delay:</strong> {selectedCritical.delay}
            </div>

            <div className={styles.devider} />

            <form onSubmit={onSubmitDelay}>
              <Input onChange={onDelayChange} value={delay} />
              <div className={styles.devider} />

              <Button type="submit">Submit</Button>
              <div className={styles.devider} />
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default EditActivity;
