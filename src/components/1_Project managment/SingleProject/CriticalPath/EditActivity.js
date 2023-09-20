import { useState } from "react";
import Modal from "../../../Ui/Modal";
import styles from "./EditActivity.module.css";
import Input from "../../../Ui/Input";
import Dropdown from "../../../Ui/Dropdown";
import React from "react";


const EditActivity = (props) => {
  const criticalData = props.criticalData;
  const requestData = props.requestData;

  const [drop, setDrop] = useState("");

  console.log(criticalData);
  console.log(requestData.skills[0]);

  let skills = [];

  if (requestData) {
    skills = requestData.skills.filter(
      (el) => el.skill === requestData.skills[props.index].skill
    );

    let tSkills = [];

    for (let i in skills) {
      tSkills.push({ name: skills[i].employee });
    }

    skills = tSkills;
  }

  console.log("SKILS");

  const onDropChange = (e) => {
    const value = e.target.value;
    setDrop(value);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        <div className={styles.title}>ACTIVITY NAME</div>
        {skills.length > 0 && (
          <Dropdown onChange={onDropChange} data={skills} />
        )}
      </div>
    </Modal>
  );
};

export default EditActivity;
