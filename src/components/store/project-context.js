import React from "react";

const ProjectContext = React.createContext({
  projectList: [],
  currentManager: null,
  setCurrentManager: () => {},
  addProjectToList: () => {},
  getProjectData: () => {},
  fetchAllData: () => {},
});

export default ProjectContext;
