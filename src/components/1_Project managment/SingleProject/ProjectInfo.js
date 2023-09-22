import styles from "./ProjectInfo.module.css";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import AreYouSure from "../../Ui/AreYouSure";
import { useContext, useEffect, useState } from "react";
import useDeleteData from "../../hooks/use-delete-data";
import { useNavigate } from "react-router-dom";
import React from "react";

import NavigationContext from "../../store/navigation-context";

const ProjectInfo = (props) => {
  const projectData = props.projectData;
  const criticalPath = props.criticalPathStatus;
  const [prompt, setPrompt] = useState(false);
  const deleteData = useDeleteData();
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);

  const [criticalPathStatus, setCriticalPathStatus] = useState("false");

  const showPrompt = () => {
    setPrompt(true);
  };

  const closePrompt = () => {
    setPrompt(false);
  };

  const deleteProject = () => {
    closePrompt();
    deleteData("", `projects/delete/${projectData._id}`).then((resp) => {
      if (resp.ok) {
        navCtx.removeFromOpen(projectData, "/project/projects");
      }
    });
  };

  useEffect(() => {
    if (criticalPath) {
      setCriticalPathStatus("true");
    } else {
      setCriticalPathStatus("false");
    }
  }, [criticalPath]);

  return (
    <div className={styles.wrapper}>
      <AreYouSure
        no={closePrompt}
        yes={deleteProject}
        prompt={prompt}
        title="Are you sure you want to delete project?"
      />
      <Label>Project info</Label>
      <div className={styles.separator} />
      <div className={styles["info-section"]}>
        <div className={styles["info-predefined"]}>Project name:</div>
        <div className={styles["info-line"]}>{projectData.name}</div>
      </div>

      <div className={styles["info-section"]}>
        <div className={styles["info-predefined"]}>Date created:</div>
        <div className={styles["info-line"]}>{projectData.creationDate}</div>
      </div>

      <div className={styles["info-section"]}>
        <div className={styles["info-predefined"]}>Start date:</div>
        <div className={styles["info-line"]}>{projectData.startDate}</div>
      </div>

      <div className={styles["info-section"]}>
        <div className={styles["info-predefined"]}>
          Critical path generated:
        </div>
        <div className={styles["info-line"]}>{criticalPathStatus}</div>
      </div>
      <div className={styles.separator}></div>
      <Button onClick={showPrompt} color={"red"}>
        DELETE
      </Button>
    </div>
  );
};

export default ProjectInfo;
