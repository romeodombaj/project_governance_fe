import styles from "./LineGroups.module.css";
import { useEffect, useState } from "react";
import useGetData from "../hooks/use-get-data";

const gropList = [
  {
    id: 0,
    name: "group0",
  },
  {
    id: 1,
    name: "group1",
  },
  {
    id: 2,
    name: "group2",
  },
];

const LineGroups = () => {
  let workGroupList = useGetData("line_managment/work_groups");

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Groups</div>
      <div>Search Groups</div>
      <div className={styles[`group-list`]}>
        {workGroupList.map((group) => {
          return <div key={group._id}>{group.name}</div>;
        })}
      </div>
    </div>
  );
};

export default LineGroups;
