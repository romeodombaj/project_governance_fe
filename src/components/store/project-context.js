import React from "react";

const ProjectContext = React.createContext({
  projectList: [],
  addProjectToList: () => {},
  getProjectData: () => {},
  fetchProjectData: () => {},
});
