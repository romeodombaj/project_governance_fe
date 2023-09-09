import Button from "../../Ui/Button";
import Label from "../../Ui/Label";
import styles from "./FeatureForm.module.css";

const FeatureForm = (props) => {
  return (
    <div className={styles.wrapper}>
      <label>Name</label>
      <label></label>
      <Button>Save</Button>
    </div>
  );
};

export default FeatureForm;
