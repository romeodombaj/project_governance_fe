import styles from "./LineChart.module.css";
import { useEffect } from "react";
import { useState } from "react";
import LineContext from "../store/line-context";
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
import { Line, Radar } from "react-chartjs-2";
import HumanResourcesContext from "../store/human-resources-context";
import { useNavigate } from "react-router-dom";

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
  const lineCtx = useContext(LineContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(1);
  const [totalRequests, setTotalRequests] = useState(1);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedData2, setSelectedData2] = useState([]);

  useEffect(() => {
    if (lineCtx.currentManager) {
      let tempData = [];

      tempData = hrCtx.employeeList.filter(
        (el) =>
          el.groupName === lineCtx.currentManager.groupName &&
          el.skills !== "line manager"
      );

      //tempData = [...new Set(tempData.map((item) => item.skills))];
      tempData = tempData.map((el) => el.skills);
      setTotal(tempData.length);
      const count = {};

      tempData.forEach((element) => {
        count[element] = (count[element] || 0) + 1;
      });
      setSelectedData(count);
    } else {
      navigate("../");
    }
  }, [hrCtx.employeeList]);

  useEffect(() => {
    let tempData = [];
    tempData = lineCtx.requestList.filter((el) => !el.approved);
    tempData = tempData.map((el) => el.skill);
    const count = {};

    tempData.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    });
    setSelectedData2(count);
  }, [lineCtx.requestList]);

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  const data = {
    labels: [...Object.keys(selectedData)],
    datasets: [
      {
        label: "People",
        data: [...Object.values(selectedData).map((el) => (el / total) * 100)],
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderColor: "rgba(0, 0, 255, 1)",
        borderWidth: 1,
      },

      {
        label: "Requests",
        data: [...Object.values(selectedData2).map((el) => (el / total) * 100)],
        backgroundColor: "rgba(255, 22, 1, 0.2)",
        borderColor: "rgba(255, 22, 1, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.chart}>
        <Radar className={styles.chart} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
