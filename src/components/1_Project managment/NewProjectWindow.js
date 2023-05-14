import styles from "./NewProjectWindow.module.css";
import Modal from "../Ui/Modal";

const NewProjectWindow = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>HELLO</div>
    </Modal>
  );
};

export default NewProjectWindow;
