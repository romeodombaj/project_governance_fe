import React from "react";

const HumanResourcesContext = React.createContext({
  employeeList: [],
  groupList: [],
  getEmployees: () => {},
  getGroups: () => {},
});

export default HumanResourcesContext;
