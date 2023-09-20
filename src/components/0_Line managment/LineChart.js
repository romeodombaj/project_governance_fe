import styles from "./LineChart.module.css";
import React, { useContext } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import HumanResourcesContext from "../store/human-resources-context";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const LineChart = (props) => {
  const hrCtx = useContext(HumanResourcesContext);

  const employees = hrCtx.employeeList;

  const unique = [...new Set(employees.map((item) => item.skills))];

  const count = employees.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [value]: (accumulator[value] || 0) + 1,
    };
  }, {});

  console.log(employees);
  console.log(unique);
  console.log(count);

  const data = {
    labels: [...unique],
    datasets: [
      {
        label: "# of Votes",
        data: [5, 6, 9],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <Radar className={styles.chart} data={data} />
    </div>
  );
};

export default LineChart;
