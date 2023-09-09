import React from "react";

const ProjectContext = React.createContext({
  projectList: [],
  addProject: [],
  getProjectData: () => {},
});
