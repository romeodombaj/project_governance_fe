import { Fragment, useEffect, useState } from "react";
import styles from "./ProjectProject.module.css";
import useGetData from "../hooks/use-get-data";

const ProjectProject = () => {
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  let projectList = useGetData("project_managment/projects");

  const onSearchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Fragment>
      {}
      <div className={styles.wrapper}>
        <div className={styles[`project-actions-wrapper`]}>
          <input
            className={styles.search}
            onChange={onSearchHandler}
            value={searchValue}
          ></input>
          <div className={styles[`add-button`]}>Add project</div>
        </div>
        <div className={styles[`project-list`]}>
          {projectList.map((project) => {
            if (project.name.includes(searchValue)) {
              return (
                <div className={styles[`project-wrapper`]} key={project._id}>
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

export default ProjectProject;
