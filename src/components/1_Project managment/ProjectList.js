import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./ProjectList.module.css";
import useGetData from "../hooks/use-get-data";
import NewProjectWindow from "./NewProject";
import NavigationContext from "../store/navigation-context";
import Project from "./SingleProject/Project";

const ProjectList = () => {
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [projectList, getProjects] = useGetData();

  const navCtx = useContext(NavigationContext);

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
      projectList[projectList.findIndex((index) => index._id === selectedId)],
      "project"
    );
  };

  useEffect(() => {
    getProjects("project_managment/projects");
  }, []);

  return (
    <Fragment>
      {isCreatingNew && <NewProjectWindow onClose={onCloseNewProject} />}
      <div className={styles.wrapper}>
        <div className={styles[`project-actions-wrapper`]}>
          <input
            className={styles.search}
            onChange={onSearchHandler}
            value={searchValue}
          ></input>
          <div onClick={onCreateNewProject} className={styles[`add-button`]}>
            Add project
          </div>
        </div>
        <div className={styles[`project-list`]}>
          {projectList &&
            projectList.map((project) => {
              if (project.name.includes(searchValue)) {
                return (
                  <div
                    onClick={openProject}
                    className={styles[`project-wrapper`]}
                    key={project._id}
                    value={project._id}
                  >
                    {project.name}
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
