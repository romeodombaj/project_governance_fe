import styles from "./FeatureElement.module.css";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";

const FeatureElement = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>1</div>
      <div>Novi korak</div>
      <div> - </div>
      <div>12h</div>
    </div>
  );
};

export default FeatureElement;
