import styles from "./ProjectManagmentPanel.module.css";
import PanelTemplate from "../Ui/PanelTemplate";
import { useEffect, useContext, useState } from "react";
import NavigationContext from "../store/navigation-context";
import { Outlet, redirect } from "react-router-dom";
import useGetData from "../hooks/use-get-data";
import { useNavigate } from "react-router-dom";

const ProjectManagmentPanel = () => {
  const navCtx = useContext(NavigationContext);
  const projectData = useGetData("project_managment/projects/");
  const navigate = useNavigate();

  useEffect(() => {
    navCtx.setCurrentPanelIndex("1");
    setTimeout(() => {}, [3000]);
    navigate("projects");
  }, []);

  return (
    <PanelTemplate>
      <div>ProjectManagmentPanel</div>
      <Outlet />
    </PanelTemplate>
  );
};

export default ProjectManagmentPanel;
