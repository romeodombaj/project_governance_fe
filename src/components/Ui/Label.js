import styles from "./Label.module.css";

const Label = (props) => {
  return <label className={styles.wrapper}>{props.children}</label>;
};

export default Label;
