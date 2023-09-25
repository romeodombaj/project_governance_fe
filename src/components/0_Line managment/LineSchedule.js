import styles from "./LineSchedule.module.css";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import LineContext from "../store/line-context";

const LineSchedule = (props) => {
  const employeeList = props.employeeList;
  const [dateList, setDateList] = useState([]);
  const [selectedRequests, setSelectedRequests] = useState([]);
  const [tableList, setTableList] = useState([]);
  const lineCtx = useContext(LineContext);

  useEffect(() => {
    if (dateList.length === 0) {
      let tempArray = ["Name"];

      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);

        tempArray.push(
          date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate()
        );
      }

      setDateList(tempArray);
    }
  }, []);

  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < employeeList.length; i++) {
      let tempRequestArray = lineCtx.requestList.filter(
        (el) =>
          el.approved &&
          el.employee === employeeList[i].name + " " + employeeList[i].surname
      );

      let tempWorkArray = [];

      for (let j = 0; j < 30; j++) {
        let temp = [
          ...tempRequestArray.filter(
            (el) =>
              new Date(dateList[j]) >= new Date(el.startDate) &&
              new Date(dateList[j]) <= new Date(el.finishDate)
          ),
        ];
        if (temp.length > 0) {
          tempWorkArray.push(temp[0].featureName);
        } else {
          tempWorkArray.push("");
        }
      }

      tempArray.push({
        employee: employeeList[i],
        work: [...tempWorkArray],
      });
    }

    setTableList(tempArray);
  }, [employeeList, lineCtx.requestList]);

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <tr className={styles.tr}>
          {dateList &&
            dateList.map((date, i) => {
              return (
                <th className={styles.th} key={i}>
                  {date}
                </th>
              );
            })}
        </tr>
        {tableList &&
          tableList.map((item, i) => {
            return (
              <tr key={i} className={styles.tr}>
                <td className={styles.td}>
                  {item.employee.name} {item.employee.surname}
                </td>
                {item.work.map((e) => {
                  return (
                    <td
                      className={`${styles.td} ${styles[e != "" &&  "tagged"]}`}
                    >
                      {e}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default LineSchedule;
