import LineManagmentContext from "../store/line-managment-context";
import styles from "./LineGroups.module.css";
import { useContext, useEffect, useState } from "react";
import DefaultLineLayout from "./MutualComponents/DefaultLineLayout";

const LineGroups = () => {
  const lineCtx = useContext(LineManagmentContext);

  useEffect(() => {
    lineCtx.getGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Groups</div>

      <DefaultLineLayout
        isEmployee={false}
        path="line_managment/work_groups"
        data={lineCtx.groupList}
      />
    </div>
  );
};

export default LineGroups;
