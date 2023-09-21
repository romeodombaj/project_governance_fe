import styles from "./HumanEmployees.module.css";
import { useContext, useEffect, useState } from "react";
import DefaultHRLayout from "./MutualComponents/DefaultHRLayout";
import HumanResourcesContext from "../store/human-resources-context";
import React from "react";

const HumanEmployees = () => {
  const hrCtx = useContext(HumanResourcesContext);
  const columnNames = ["index", "name", "surname", "skills", "groupName"];

  const inputs = [
    {
      name: "name",
      value: "",
    },
    {
      name: "surname",
      value: "",
    },
    {
      name: "skills",
      value: "",
    },
  ];

  const drops = [
    {
      name: "choose group",
      value: "",
      dataList: [...hrCtx.groupList],
    },
  ];

  console.log(drops);

  useEffect(() => {
    hrCtx.getEmployees();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Employees</div>

      <DefaultHRLayout
        form={{
          inputs: [...inputs],
          drops: [...drops],
        }}
        isEmployee={true}
        columnNames={columnNames}
        path="employees"
        data={hrCtx.employeeList}
      />
    </div>
  );
};

export default HumanEmployees;
