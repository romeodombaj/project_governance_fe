import React from "react";

const HumanResourcesContext = React.createContext({
  employeeList: [],
  groupList: [],
  getEmployees: () => {},
  getGroups: () => {},
  fetchAllData: () => {},
});

export default HumanResourcesContext;
