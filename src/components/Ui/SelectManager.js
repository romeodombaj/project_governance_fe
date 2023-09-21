import Button from "./Button";
import Modal from "./Modal";
import styles from "./SelectManager.module.css";
import React, { Fragment } from "react";

const SelectManager = (props) => {
  const data = props.data;

  const onClick = (e) => {
    const index = e.currentTarget.getAttribute("index");
    props.onClick(data[index]);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.wrapper}>
        {data &&
          data.map((item, i) => {
            return (
              <Fragment key={i}>
                <div className={styles.separator} />
                <Button
                  key={i}
                  index={i}
                  data={item}
                  onClick={onClick}
                  isLight={true}
                >
                  {item.name} {item.surname}
                </Button>
              </Fragment>
            );
          })}
      </div>
    </Modal>
  );
};

export default SelectManager;
