import { useParams, useLocation } from "react-router-dom";
import styles from "./Project.module.css";
import ProjectInfo from "./ProjectInfo";
import ProjectFeatures from "./ProjectFeatures";
import CriticalPathWindow from "./CriticalPath/CriticalPathWindow";
import { useEffect, useState } from "react";
import useGetData from "../../hooks/use-get-data";
import React from "react";

import usePostData from "../../hooks/use-post-data";
import usePatchData from "../../hooks/use-patch-data";

const Project = () => {
  const id = useParams().projectName;
  const location = useLocation();
  const patchData = usePatchData();
  const [criticalPathData, getCriticalPathData] = useGetData();
  const [positionRequest, getPositionRequest] = useGetData();
  const [windowIndex, setWindowIndex] = useState(0);

  const [projectData, setProjectData] = useState(location.state.option);

  const getCriticalPath = async () => {
    const res = await getCriticalPathData(`critical_paths/${projectData._id}`);
    return res;
  };

  const openActivityWindow = () => {
    setWindowIndex(0);
  };

  const openFeatureWindow = () => {
    setWindowIndex(1);
  };

  const getRequest = () => {
    getPositionRequest(`position_requests/${projectData._id}`);
  };

  useEffect(() => {
    getCriticalPath();
    getRequest();
  }, [location.pathname]);

  useEffect(() => {
    if (criticalPathData[0]) {
      console.log(criticalPathData[0]);
      const criticalFinish =
        criticalPathData[0].calculatedArray[
          criticalPathData[0].calculatedArray.length - 1
        ].finishDate;

      const criticalDelay =
        criticalPathData[0].calculatedArray[
          criticalPathData[0].calculatedArray.length - 1
        ].delay;

      if (
        projectData.endDate != criticalFinish ||
        projectData.delay != criticalDelay
      ) {
        let tempDate = new Date(criticalFinish);
        tempDate.setDate(tempDate.getDate() + criticalDelay * 7);

        let dateEnd =
          tempDate.getFullYear() +
          "-" +
          (tempDate.getMonth() + 1) +
          "-" +
          tempDate.getDate();

        const data = {
          name: projectData.name,
          startDate: projectData.startDate,
          endDate: criticalFinish,
          delay: criticalDelay,
          delayedEndDate: dateEnd,
        };

        setProjectData({
          _id: projectData._id,
          ...data,
        });

        patchData(data, `projects/update/${projectData._id}`);
      }
    }
  }, [criticalPathData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{projectData.name}</div>
      <div className={styles.nav}>
        <div
          onClick={openActivityWindow}
          className={`${styles["nav-option"]} ${
            styles[windowIndex === 0 && "nav-otpion-selected"]
          }`}
        >
          Acitvity View
        </div>
        <div
          onClick={openFeatureWindow}
          className={`${styles["nav-option"]} ${
            styles[windowIndex === 1 && "nav-otpion-selected"]
          }`}
        >
          Feature Control
        </div>
      </div>
      {windowIndex === 0 ? (
        criticalPathData[0] ? (
          <CriticalPathWindow
            requestData={positionRequest}
            criticalPathData={criticalPathData[0]}
          />
        ) : (
          <div
            style={{
              margin: "auto",
              color: "gold",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Critical path not yet created
          </div>
        )
      ) : (
        <div className={styles.main}>
          <ProjectInfo
            criticalPathStatus={criticalPathData[0]}
            projectData={projectData}
          />
          {criticalPathData[0] ? (
            <ProjectFeatures
              projectData={projectData}
              criticalPathData={criticalPathData[0]}
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
      )}
    </div>
  );
};

export default Project;
