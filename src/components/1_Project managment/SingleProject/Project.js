import { useParams, useLocation } from "react-router-dom";
import styles from "./Project.module.css";

const Project = () => {
  const id = useParams().projectName;
  const location = useLocation();
  let projectData = location.state.option;

  const addFeatureHandler = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{projectData.name}</div>
      <div className={styles[`feature-list`]}>
        {projectData.features &&
          projectData.features.map((feature) => {
            return <div className={styles.feature}>{feature}</div>;
          })}
        <div className={styles[`add-feature`]} onClick={addFeatureHandler}>
          ADD
        </div>
      </div>
    </div>
  );
};

export default Project;