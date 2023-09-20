import useGetData from "../hooks/use-get-data";
import ProjectContext from "./project-context";
import React, { useState } from "react";

const ProjectProvider = (props) => {
  const [projectList, getProjectData] = useGetData();
  const [currentManager, setCurrentManager] = useState();

  const getProjects = () => {
    getProjectData("projects");
  };

  const fetchAllData = () => {
    getProjects();
  };

  const addProject = (item) => {};

  const projectContext = {
    projectList: projectList,
    currentManager: currentManager,
    setCurrentManager: setCurrentManager,
    getProjects: getProjects,
    addProject: addProject,
    fetchAllData: fetchAllData,
  };

  return (
    <ProjectContext.Provider value={projectContext}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
