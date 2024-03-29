import styles from "./NewProject.module.css";
import Modal from "../Ui/Modal";
import usePostData from "../hooks/use-post-data";
import { useState } from "react";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import Label from "../Ui/Label";
import React from "react";

import Error from "../Ui/Error";

const NewProject = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const postData = usePostData();
  const postPath = "projects/add";

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (name.length > 0 && date.length === 10) {
      const data = {
        name: name,
        startDate: date,
        endDate: date,
        delay: 0,
        delayedEndDate: 0,
      };
      postData(data, postPath).then((resp) => {
        if (resp.ok) {
          props.onClose();
        }
      });
    } else {
      setError("Fill all the input fields");
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        <Error value={error} />
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <Label>Project Name</Label>
          <div className={styles["separator"]} />
          <Input onChange={onNameChange} value={name} error={error} />
          <div className={styles["separator"]} />

          <Label>Start date "YYYY-MM-DD"</Label>
          <div className={styles["separator"]} />
          <Input onChange={onDateChange} value={date} error={error} />
          <div className={styles["separator"]} />

          <div className={styles["button-center"]}>
            <Button isLight={true} type="submit">
              Add new project
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default NewProject;
