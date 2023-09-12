import { useParams, useLocation } from "react-router-dom";
import styles from "./Project.module.css";
import ProjectInfo from "./ProjectInfo";
import ProjectFeatures from "./ProjectFeatures";
import FeatureForm from "./FeatureForm";
import CriticalPathWindow from "./CriticalPath/CriticalPathWindow";
import { useEffect } from "react";
import useGetData from "../../hooks/use-get-data";

const Project = () => {
  const id = useParams().projectName;
  const location = useLocation();
  let projectData = location.state.option;

  const [criticalPathData, getCriticalPathData] = useGetData();

  useEffect(() => {
    getCriticalPathData("project_managment/critical_paths/");
  }, []);

  useEffect(() => {
    //console.log(criticalPathData);
  }, [criticalPathData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{projectData.name}</div>
      {criticalPathData && (
        <CriticalPathWindow criticalPathData={criticalPathData[0]} />
      )}

      <div className={styles.main}>
        <ProjectInfo projectData={projectData} />
        <ProjectFeatures projectData={projectData} />
      </div>

      {/*<div className={styles[`feature-list`]}>
        {projectData.features &&
          projectData.features.map((feature) => {
            return <div className={styles.feature}>{feature}</div>;
          })}
        <div className={styles[`add-feature`]} onClick={addFeatureHandler}>
          ADD
        </div>
      </div>
      */}
    </div>
  );
};

export default Project;
