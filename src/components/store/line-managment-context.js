import React from "react";

const LineManagmentContext = React.createContext({
  employeeList: [],
  groupList: [],
  getEmployees: () => {},
  getGroups: () => {},
});

export default LineManagmentContext;
