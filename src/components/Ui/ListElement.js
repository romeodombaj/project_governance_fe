import styles from "./ListElement.module.css";
import exitIcon from "../../assets/x-icon.png";
import useDeleteData from "../hooks/use-delete-data";
import { useContext } from "react";
import LineManagmentContext from "../store/human-resources-context";
import React from "react";
import { useState, useEffect } from "react";

const ListElement = (props) => {
  const data = props.data;
  const index = props.index;
  const path = props.path;
  const isEmployee = props.isEmployee;
  const lineCtx = useContext(LineManagmentContext);
  const [dataArray, setDataArray] = useState(["", "", "", "", ""]);

  useEffect(() => {
    let tempArray = Object.keys(data).map((key) => data[key]);
    tempArray = tempArray.filter((el) => el.length < 24);
    for (let i = tempArray.length; i < 4; i++) {
      tempArray.push("");
    }
    setDataArray(tempArray);
  }, [data]);

  const deleteData = useDeleteData();

  const onDeleteHandler = (e) => {
    const id = e.currentTarget.getAttribute("value");
    deleteData("", path + `/delete/${id}`).then((resp) => {
      if (resp.ok) {
        lineCtx.fetchAllData();
      }
    });
  };

  return (
    <div className={styles.wrapper} onClick={props.onClick} index={index}>
      <div className={styles.info}>{index}</div>
      {dataArray.map((column, i) => {
        return (
          <div key={i} className={styles.info}>
            {column}
          </div>
        );
      })}
      <div
        className={styles["exit-wrapper"]}
        onClick={onDeleteHandler}
        value={props.id}
      >
        <img src={exitIcon} className={styles.exit} />
      </div>
    </div>
  );
};

export default ListElement;
