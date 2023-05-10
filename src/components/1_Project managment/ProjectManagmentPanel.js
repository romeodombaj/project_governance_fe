import styles from "./ProjectManagmentPanel.module.css";
import PanelTemplate from "../Ui/PanelTemplate";
import { useEffect, useContext } from "react";
import NavigationContext from "../store/navigation-context";
import { Outlet } from "react-router-dom";

const ProjectManagmentPanel = () => {
  const navCtx = useContext(NavigationContext);

  useEffect(() => {
    navCtx.setCurrentPanelIndex("1");
  }, []);

  return (
    <PanelTemplate>
      <div>ProjectManagmentPanel</div>
      <Outlet />
    </PanelTemplate>
  );
};

export default ProjectManagmentPanel;
