import Button from "./Button";
import Modal from "./Modal";
import styles from "./SelectManager.module.css";
import React from "react";

const SelectManager = (props) => {
  const data = props.data;

  const onClick = (e) => {
    const value = e.currentTarget.getAttribute("data");
    props.onClick(data);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        {data &&
          data.map((item, i) => {
            return (
              <Button key={i} data={item} onClick={onClick} isLight={true}>
                {item.name} {item.surname}
              </Button>
            );
          })}
      </div>
    </Modal>
  );
};

export default SelectManager;
