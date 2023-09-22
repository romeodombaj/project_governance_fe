import { Fragment, useContext, useEffect, useState } from "react";
import styles from "./LineEmployees.module.css";
import HumanResourcesContext from "../store/human-resources-context";
import List from "../Ui/List";
import React from "react";
import LineContext from "../store/line-context";
import { useNavigate } from "react-router-dom";
import LineSchedule from "./LineSchedule";

const LineEmployees = (props) => {
  const hrCtx = useContext(HumanResourcesContext);
  const lineCtx = useContext(LineContext);
  const path = "employees";
  const navigate = useNavigate();
  const columnNames = ["index", "name", "surname", "skills", "groupName"];

  const [search, setSearch] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    if (lineCtx.currentManager) {
      setSelectedData(
        hrCtx.employeeList.filter(
          (el) =>
            el.groupName === lineCtx.currentManager.groupName &&
            el.skills !== "line manager"
        )
      );
    } else {
      navigate("../");
    }
  }, [hrCtx.employeeList]);

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.title}>Employee List</div>
        <div className={styles.List}>
          <List
            columns={columnNames}
            path={path}
            data={selectedData}
            search={search}
          ></List>
        </div>
      </div>
      <LineSchedule employeeList={selectedData} />
    </Fragment>
  );
};

export default LineEmployees;
