import React from "react";

const LineContext = React.createContext({
  requestList: [],
  currentManager: null,
  setCurrentManager: () => {},
  getRequests: () => {},
  fetchAllData: () => {},
});

export default LineContext;
