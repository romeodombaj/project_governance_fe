import LineManagmentContext from "../store/human-resources-context";
import styles from "./HumanEmployees.module.css";
import { useContext, useEffect, useState } from "react";
import DefaultHRLayout from "./MutualComponents/DefaultHRLayout";

const HumanEmployees = () => {
  const lineCtx = useContext(LineManagmentContext);

  useEffect(() => {
    lineCtx.getGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Employees</div>

      <DefaultHRLayout
        isEmployee={true}
        path="employees"
        data={lineCtx.employeeList}
      />
    </div>
  );
};

export default HumanEmployees;
