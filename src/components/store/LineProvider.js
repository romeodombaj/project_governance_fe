import { useEffect, useState } from "react";
import LineEmployees from "../0_Line managment/LineEmployees";
import useGetData from "../hooks/use-get-data";
import LineContext from "./line-context";
import React from "react";

const LineProvider = (props) => {
  const [requestList, getRequestData] = useGetData();
  const [currentManager, setCurrentManager] = useState();

  const getRequests = () => {
    getRequestData("position_requests");
  };

  const fetchAllData = () => {
    getRequests();
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const lineContext = {
    requestList: requestList,
    currentManager: currentManager,
    setCurrentManager: setCurrentManager,
    getRequests: getRequests,
    fetchAllData: fetchAllData,
  };

  return (
    <LineContext.Provider value={lineContext}>
      {props.children}
    </LineContext.Provider>
  );
};

export default LineProvider;
