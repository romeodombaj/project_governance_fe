import LineManagmentContext from "../store/line-managment-context";
import styles from "./LineEmployees.module.css";
import { useContext, useEffect, useState } from "react";
import DefaultLineLayout from "./MutualComponents/DefaultLineLayout";

const LineEmployees = () => {
  const lineCtx = useContext(LineManagmentContext);

  useEffect(() => {
    lineCtx.getGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Employees</div>

      <DefaultLineLayout
        isEmployee={true}
        path="line_managment/employees"
        data={lineCtx.employeeList}
      />
    </div>
  );
};

export default LineEmployees;
