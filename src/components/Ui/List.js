import styles from "./List.module.css";
import ListElement from "./ListElement";
import React, { useEffect, useState } from "react";

import exitIcon from "../../assets/x-icon.png";

const List = (props) => {
  const data = props.data;
  const path = props.path;
  const search = props.search;
  const isEmployee = props.isEmployee;
  const [columns, setColumns] = useState(props.columns || []);

  return (
    <div className={styles.wrapper}>
      <div className={styles["list-names"]}>
        {columns &&
          columns.map((item, i) => {
            return (
              <div key={i} className={styles["column-name"]}>
                {item}
              </div>
            );
          })}

        <div className={styles["exit-wrapper"]}>
          <img src={exitIcon} className={styles.exit} />
        </div>
      </div>
      <div className={styles.list}>
        {data &&
          data.map((item, i) => {
            if (
              item.name.includes(search) ||
              (item.surname && item.surname.includes(search)) ||
              (item.skills && item.skills.includes(search)) ||
              (item.groupName && item.groupName.includes(search))
            ) {
              return (
                <ListElement
                  onClick={props.onElementClick}
                  isEmployee={isEmployee}
                  key={i}
                  path={path}
                  index={i + 1}
                  data={data[i]}
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
