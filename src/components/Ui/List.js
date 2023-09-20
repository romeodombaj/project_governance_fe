import styles from "./List.module.css";
import ListElement from "./ListElement";
import React from "react";

const List = (props) => {
  const data = props.data;
  const path = props.path;
  const search = props.search;
  const isEmployee = props.isEmployee;

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {data.map((item, i) => {
          if (item.name.includes(search)) {
            return (
              <ListElement
                onClick={props.onElementClick}
                isEmployee={isEmployee}
                key={i}
                path={path}
                index={i}
                data={[item.name, item.surname, item.skills]}
                id={item._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default List;
