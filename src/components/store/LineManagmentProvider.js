import React, { useEffect, useState } from "react";
import LineManagmentContext from "./line-managment-context";
import useGetData from "../hooks/use-get-data";

const LineManagmentProvider = (props) => {
  const [employeeList, getEmployeeData] = useGetData();
  const [groupList, getGroupData] = useGetData();

  const getEmployees = () => {
    getEmployeeData("line_managment/employees");
  };

  const getGroups = () => {
    getGroupData("line_managment/work_groups");
  };

  const lineManagmentContext = {
    employeeList: employeeList,
    groupList: groupList,
    getEmployees: getEmployees,
    getGroups: getGroups,
  };

  useEffect(() => {
    getEmployees();
    getGroups();
  }, []);

  return (
    <LineManagmentContext.Provider value={lineManagmentContext}>
      {props.children}
    </LineManagmentContext.Provider>
  );
};

export default LineManagmentProvider;
