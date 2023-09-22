import styles from "./ProjectManagmentPanel.module.css";
import PanelTemplate from "../Ui/PanelTemplate";
import { useEffect, useContext, useState, Fragment } from "react";
import NavigationContext from "../store/navigation-context";
import { Outlet, redirect } from "react-router-dom";
import useGetData from "../hooks/use-get-data";
import { useNavigate } from "react-router-dom";
import React from "react";
import HumanResourcesContext from "../store/human-resources-context";
import ProjectContext from "../store/project-context";
import SelectManager from "../Ui/SelectManager";

const ProjectManagmentPanel = () => {
  const navCtx = useContext(NavigationContext);
  const hrCtx = useContext(HumanResourcesContext);
  const prjCtx = useContext(ProjectContext);
  const projectData = useGetData("project_managment/projects/");
  const navigate = useNavigate();

  /*const managerList = hrCtx.employeeList.filter(
    (el) => el.skills === "project manager"
  );

  const onManagerSelect = (value) => {
    prjCtx.setCurrentManager(value);
    navigate("projects");
  };

  const onCloseDeadEnd = () => {};*/

  useEffect(() => {
    navCtx.setCurrentPanelIndex("2");
    navigate("projects");
  }, []);

  return (
    <Fragment>
      {/*!prjCtx.currentManager && (
        <SelectManager
          onClose={onCloseDeadEnd}
          onClick={onManagerSelect}
          data={managerList}
        />
      )*/}
      <PanelTemplate>
        <Outlet />
      </PanelTemplate>
    </Fragment>
  );
};

export default ProjectManagmentPanel;
