import useGetData from "../hooks/use-get-data";
import styles from "./ProcessFeatures.module.css";
import React from "react";


const ProcessFeatures = () => {
  let featureList = useGetData("process_managment/features");

  return (
    <div className={styles.wrapper}>
      <div>FEATURES</div>
      {featureList.map((feature) => {
        return <div key={feature._id}>{feature.name}</div>;
      })}
    </div>
  );
};

export default ProcessFeatures;
