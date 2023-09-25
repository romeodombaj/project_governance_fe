import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./ProjectList.module.css";
import NewProjectWindow from "./NewProject";
import NavigationContext from "../store/navigation-context";
import Input from "../Ui/Input";
import ProjectContext from "../store/project-context";
import React from "react";
import HumanResourcesContext from "../store/human-resources-context";
import { useNavigate } from "react-router-dom";
import ScoreCard from "../Ui/ScoreCard";

const ProjectList = () => {
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const prjCtx = useContext(ProjectContext);
  const hrCtx = useContext(HumanResourcesContext);

  const [selectedData, setSelectedData] = useState([]);

  /*useEffect(() => {
    if (prjCtx.currentManager) {
      setSelectedData(
        prjCtx.projectList.filter(
          (el) => el.projectManagerId === prjCtx.currentManager._id
        )
      );
    } else {
      navigate("../");
    }
  }, [prjCtx.projectList]);*/

  const onSearchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const onCreateNewProject = () => {
    setIsCreatingNew(true);
  };

  const onCloseNewProject = () => {
    setIsCreatingNew(false);
  };

  const openProject = (event) => {
    const selectedId = event.currentTarget.getAttribute("value");

    navCtx.addToOpen(
      prjCtx.projectList[
        prjCtx.projectList.findIndex((index) => index._id === selectedId)
      ],
      "project"
    );
  };

  useEffect(() => {
    if (!isCreatingNew) {
      prjCtx.fetchAllData();
    }
  }, [isCreatingNew]);

  return (
    <Fragment>
      {isCreatingNew && <NewProjectWindow onClose={onCloseNewProject} />}
      <div className={styles.wrapper}>
        <div className={styles.title}>PROJECT MANAGMENT PANEL</div>
        <div className={styles[`project-actions-wrapper`]}>
          <div className={styles.search}>
            <Input
              placeholder="Search..."
              onChange={onSearchHandler}
              value={searchValue}
            ></Input>
          </div>
          <div onClick={onCreateNewProject} className={styles[`add-button`]}>
            Add project
          </div>
        </div>
        <div className={styles[`project-list`]}>
          {prjCtx.projectList &&
            prjCtx.projectList.map((project) => {
              if (project.name.includes(searchValue)) {
                return (
                  <div
                    onClick={openProject}
                    className={styles[`project-wrapper`]}
                    key={project._id}
                    value={project._id}
                  >
                    {project.name}
                    <div className={styles.delay}>{project.delay}w delay</div>
                    <ScoreCard value={project.delay} />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectList;
