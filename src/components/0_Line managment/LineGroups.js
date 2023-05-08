import styles from "./LineGroups.module.css";
import { useEffect, useState } from "react";

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
  const [workGroupList, setWorkGroupList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/line_managment/work_groups")
      .then((response) => response.json())
      .then((data) => setWorkGroupList(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage Groups</div>
      <div>Search Groups</div>
      <div className={styles[`group-list`]}>
        {workGroupList.map((group) => {
          return <div key={group.id}>{group.name}</div>;
        })}
      </div>
    </div>
  );
};

export default LineGroups;
