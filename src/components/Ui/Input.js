import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      className={`${styles.wrapper} ${styles[props.error && "error"]}`}
    />
  );
};

export default Input;
