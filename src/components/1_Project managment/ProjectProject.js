import { useEffect, useState } from "react";
import styles from "./ProjectProject.module.css";
import useGetData from "../hooks/use-get-data";

const ProjectProject = () => {

  let projectList = useGetData("project_managment/projects");

  return (
    <div className={styles.wrapper}>
      {projectList.map((project) => {
        return <div key={project._id}>{project.name}</div>;
      })}
    </div>
  );
};

export default ProjectProject;
