import styles from "./NewProjectWindow.module.css";
import Modal from "../Ui/Modal";
import usePostData from "../hooks/use-post-data";
import { useState } from "react";

const NewProjectWindow = (props) => {
  const [name, setName] = useState("");
  const [featureName, setFeatureName] = useState("");
  const [featureImportance, setFeatureImportance] = useState(0);

  const postData = usePostData("project_managment/projects/add");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onFeatureNameChange = (event) => {
    setFeatureName(event.target.value);
  };

  const onFeatureImportanceChange = (event) => {
    setFeatureImportance(event.target.value);
  };

  const onSubmitHandler = () => {
    const data = {
      name: name,
      feature: {
        featureName: featureName,
        featureImportance: featureImportance,
      },
    };
    postData(data);

    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
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
      </div>
    </Modal>
  );
};

export default NewProjectWindow;
