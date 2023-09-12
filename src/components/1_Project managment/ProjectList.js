import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./ProjectList.module.css";
import useGetData from "../hooks/use-get-data";
import NewProjectWindow from "./NewProject";
import NavigationContext from "../store/navigation-context";
import Project from "./SingleProject/Project";
import Input from "../Ui/Input";

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
    if (!isCreatingNew) getProjects("project_managment/projects");
  }, [isCreatingNew]);

  return (
    <Fragment>
      {isCreatingNew && <NewProjectWindow onClose={onCloseNewProject} />}
      <div className={styles.wrapper}>
        <div className={styles.title}>PROJECT MANAGMENT PANEL</div>
        <div className={styles[`project-actions-wrapper`]}>
          <div className={styles.search}>
            <Input onChange={onSearchHandler} value={searchValue}></Input>
          </div>
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
