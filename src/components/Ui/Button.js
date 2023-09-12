import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      type={props.type}
      onClick={props.onClick}
      className={`${styles.wrapper} ${styles[props.isLight && "light"]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
