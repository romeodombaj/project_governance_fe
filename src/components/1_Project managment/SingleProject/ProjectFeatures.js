import styles from "./ProjectFeatures.module.css";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import FeatureElement from "./FeatureElement";

const ProjectFeatures = (props) => {
  const projectData = props.projectData;

  return (
    <div className={styles.wrapper}>
      <Label>Project Features</Label>
      <div className={styles["feature-list"]}>
        <FeatureElement />
        <FeatureElement />
        <FeatureElement />
        <Button>Add Feature</Button>
      </div>
    </div>
  );
};

export default ProjectFeatures;
