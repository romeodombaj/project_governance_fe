import styles from "./HumanGroups.module.css";
import { useContext, useEffect, useState } from "react";
import DefaultHRLayout from "./MutualComponents/DefaultHRLayout";
import HumanResourcesContext from "../store/human-resources-context";
import React from "react";

const HumanGroups = () => {
  const hrCtx = useContext(HumanResourcesContext);
  const columnNames = ["index", "name", "manager", "", ""];

  const inputs = [
    {
      name: "name",
      value: "",
    },
  ];

  useEffect(() => {
    hrCtx.getGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Groups</div>

      <DefaultHRLayout
        columnNames={columnNames}
        isEmployee={false}
        form={{ inputs: [...inputs], drops: [] }}
        path="work_groups"
        data={hrCtx.groupList}
      />
    </div>
  );
};

export default HumanGroups;
