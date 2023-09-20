import React, { useEffect, useState } from "react";
import useGetData from "../hooks/use-get-data";
import HumanResourcesContext from "./human-resources-context";

const HumanResourcesProvider = (props) => {
  const [employeeList, getEmployeeData] = useGetData();
  const [groupList, getGroupData] = useGetData();

  const getEmployees = () => {
    getEmployeeData("employees");
  };

  const getGroups = () => {
    getGroupData("work_groups");
  };

  const fetchAllData = () => {
    getEmployees();
    getGroups();
  };

  const humanResourcesContext = {
    employeeList: employeeList,
    groupList: groupList,
    getEmployees: getEmployees,
    getGroups: getGroups,
    fetchAllData: fetchAllData,
  };

  useEffect(() => {
    getEmployees();
    getGroups();
  }, []);

  return (
    <HumanResourcesContext.Provider value={humanResourcesContext}>
      {props.children}
    </HumanResourcesContext.Provider>
  );
};

export default HumanResourcesProvider;
