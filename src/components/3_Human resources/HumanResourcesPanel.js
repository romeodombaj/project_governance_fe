import styles from "./HumanResourcesPanel.module.css";
import PanelTemplate from "../Ui/PanelTemplate";
import { Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";
import NavigationContext from "../store/navigation-context";
import { useNavigate } from "react-router-dom";
import HumanResourcesContext from "../store/human-resources-context";
import React from "react";


const HumanResourcesPanel = () => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const hrCtx = useContext(HumanResourcesContext);

  useEffect(() => {
    hrCtx.fetchAllData();

    navCtx.setCurrentPanelIndex("0");
    navigate("groups");
  }, []);

  return (
    <PanelTemplate>
      <Outlet />
    </PanelTemplate>
  );
};

export default HumanResourcesPanel;
