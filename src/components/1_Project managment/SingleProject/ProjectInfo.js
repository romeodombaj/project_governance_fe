import styles from "./ProjectInfo.module.css";
import Label from "../../Ui/Label";

const ProjectInfo = (props) => {
  const projectData = props.projectData;

  return (
    <div className={styles.wrapper}>
      <Label>Project info</Label>
      <div>Date created:</div>
      <div>Date created:</div>
      <div>Date created:</div>
      <div>Date created:</div>
    </div>
  );
};

export default ProjectInfo;
