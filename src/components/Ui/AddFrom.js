import styles from "./AddForm.module.css";
import Label from "./Label";
import Input from "./Input";
import { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import React from "react";

const AddForm = (props) => {
  const path = props.path;
  const isEmployee = props.isEmployee;

  const [inputs, setInputs] = useState(props.inputs || []);
  const [drops, setDrops] = useState(props.drops || []);

  const [group, setGroup] = useState("");

  const onInputChange = (e) => {
    const value = e.target.value;
    const id = e.target.getAttribute("index");

    let tempInputs = [...inputs];

    tempInputs[id].value = value;

    setInputs(tempInputs);
  };

  const onDropChange = (e) => {
    const value = e.target.value;
    const id = e.target.getAttribute("index");

    let tempDrops = [...drops];

    tempDrops[id].value = value;

    setDrops(tempDrops);
  };

  const onGroupChange = (e) => {
    const value = e.target.value;
    setGroup(value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    props.onAddNew(inputs, drops);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmitForm}>
        {inputs.map((input, i) => {
          return (
            <div key={i} className={styles.section}>
              <Label>{input.name}</Label>
              <Input index={i} onChange={onInputChange} value={input.value} />
            </div>
          );
        })}

        {drops.map((drop, i) => {
          return (
            <div key={i} className={styles.section}>
              <Label>{drop.name}</Label>
              <Dropdown
                index={i}
                data={drop.dataList}
                onChange={onDropChange}
              />
            </div>
          );
        })}

        <div className={styles.separator} />
        <Button isLight={true} type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddForm;
