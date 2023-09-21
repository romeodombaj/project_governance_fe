import styles from "./LineManagmentPanel.module.css";
import PanelTemplate from "../Ui/PanelTemplate";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import { useEffect, useContext, useState, Fragment } from "react";
import NavigationContext from "../store/navigation-context";
import { useNavigate } from "react-router-dom";
import useGetData from "../hooks/use-get-data";
import HumanResourcesContext from "../store/human-resources-context";
import React from "react";
import LineContext from "../store/line-context";
import SelectManager from "../Ui/SelectManager";

const LineManagmentPanel = () => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const hrCtx = useContext(HumanResourcesContext);
  const lineCtx = useContext(LineContext);

  const managerList = hrCtx.employeeList.filter(
    (el) => el.skills === "line manager"
  );

  const onManagerSelect = (value) => {
    lineCtx.setCurrentManager(value);
    navigate("requests");
  };

  const onCloseDeadEnd = () => {};

  useEffect(() => {
    hrCtx.fetchAllData();
    navCtx.setCurrentPanelIndex("1");
  }, []);

  return (
    <Fragment>
      {!lineCtx.currentManager && (
        <SelectManager
          onClose={onCloseDeadEnd}
          onClick={onManagerSelect}
          data={managerList}
        />
      )}
      <PanelTemplate>
        <Outlet />
      </PanelTemplate>
    </Fragment>
  );
};

export default LineManagmentPanel;
