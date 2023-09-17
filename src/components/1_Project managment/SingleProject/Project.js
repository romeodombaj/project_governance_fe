import { useParams, useLocation } from "react-router-dom";
import styles from "./Project.module.css";
import ProjectInfo from "./ProjectInfo";
import ProjectFeatures from "./ProjectFeatures";
import CriticalPathWindow from "./CriticalPath/CriticalPathWindow";
import { useEffect } from "react";
import useGetData from "../../hooks/use-get-data";

const Project = () => {
  const id = useParams().projectName;
  const location = useLocation();
  let projectData = location.state.option;

  const [criticalPathData, getCriticalPathData] = useGetData();

  const getCriticalPath = () => {
    getCriticalPathData(`critical_paths/${projectData._id}`);
  };

  useEffect(() => {
    getCriticalPath();
  }, [location.pathname]);

  useEffect(() => {
    console.log("CRITICAL");
    console.log(criticalPathData);
  }, [criticalPathData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{projectData.name}</div>
      {criticalPathData[0] && (
        <CriticalPathWindow criticalPathData={criticalPathData[0]} />
      )}

      <div className={styles.main}>
        <ProjectInfo
          criticalPathStatus={criticalPathData[0]}
          projectData={projectData}
        />
        {criticalPathData[0] ? (
          <ProjectFeatures
            projectData={projectData}
            criticalPathId={criticalPathData[0]._id}
            getCriticalPath={getCriticalPath}
          />
        ) : (
          <ProjectFeatures
            projectData={projectData}
            criticalPathId={undefined}
            getCriticalPath={getCriticalPath}
          />
        )}
      </div>
    </div>
  );
};

export default Project;
