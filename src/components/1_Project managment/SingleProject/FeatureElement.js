import styles from "./FeatureElement.module.css";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import React from "react";


const FeatureElement = (props) => {
  const feature = props.feature;
  const id = props.id;

  const onClickHandler = () => {
    props.onClick(feature, id);
  };

  return (
    <div onClick={onClickHandler} className={styles.wrapper}>
      <div>{props.id}</div>
      <div>{feature.name}</div>
      <div>{feature.conditions}</div>
      <div>{feature.duration}</div>
      <div>{feature.skill}</div>
    </div>
  );
};

export default FeatureElement;
