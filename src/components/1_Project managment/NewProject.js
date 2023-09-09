import styles from "./NewProject.module.css";
import Modal from "../Ui/Modal";
import usePostData from "../hooks/use-post-data";
import { useState } from "react";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import Label from "../Ui/Label";

const NewProject = (props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const postData = usePostData("project_managment/projects/add");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (name.length > 0) {
      const data = {
        name: name,
        feature: {
          featureName: "",
          featureImportance: "",
        },
      };
      postData(data);

      props.onClose();
    } else {
      setError(true);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <Label>Project Name</Label>
          <Input onChange={onNameChange} value={name} error={error} />
          <div className={styles["separator"]} />
          <Button type="submit">Add new project</Button>
        </form>

        {/*
        <form className={styles[`info-form`]}>
          <div className={styles[`form-section`]}>
            <label>Project Name:</label>
            <input onChange={onNameChange} value={name} />
          </div>
        </form>
        <hr />
        <div className={styles[`feature-section`]}>
          <label>Features:</label>
          <div className={styles.feature}>
            <label>1.</label>
            <div>
              <label>Name: </label>
              <input onChange={onFeatureNameChange} value={featureName} />
            </div>
            <div>
              <label>Importance: </label>
              <input
                onChange={onFeatureImportanceChange}
                value={featureImportance}
              />
            </div>
          </div>
        </div>

        <div className={styles[`add-feature`]}>+</div>
        <button className={styles.submit} onClick={onSubmitHandler}>
          SUBMIT
        </button>
        */}
      </div>
    </Modal>
  );
};

export default NewProject;
