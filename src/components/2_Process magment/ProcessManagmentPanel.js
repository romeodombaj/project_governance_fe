import styles from "./ProcessManagmentPanel.module.css";
import PanelTemplate from "../Ui/PanelTemplate";
import { useEffect, useContext } from "react";
import NavigationContext from "../store/navigation-context";
import { Outlet } from "react-router-dom";
import React from "react";


const ProcessManagmentPanel = () => {
  const navCtx = useContext(NavigationContext);

  useEffect(() => {
    navCtx.setCurrentPanelIndex("2");
  }, []);

  return (
    <PanelTemplate>
      <div>ProcessManagmentPanel</div>
      <Outlet />
    </PanelTemplate>
  );
};

export default ProcessManagmentPanel;
