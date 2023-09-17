import LineManagmentContext from "../store/human-resources-context";
import styles from "./HumanGroups.module.css";
import { useContext, useEffect, useState } from "react";
import DefaultHRLayout from "./MutualComponents/DefaultHRLayout";

const HumanGroups = () => {
  const lineCtx = useContext(LineManagmentContext);

  useEffect(() => {
    lineCtx.getGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Groups</div>

      <DefaultHRLayout
        isEmployee={false}
        path="work_groups"
        data={lineCtx.groupList}
      />
    </div>
  );
};

export default HumanGroups;
