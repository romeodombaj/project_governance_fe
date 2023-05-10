import styles from "./LineManagmentPanel.module.css";
import LineGroups from "./LineGroups";
import LineEmployees from "./LineEmployees";
import PanelTemplate from "../Ui/PanelTemplate";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import { useEffect, useContext } from "react";
import NavigationContext from "../store/navigation-context";

const LineManagmentPanel = () => {
  const navCtx = useContext(NavigationContext);

  useEffect(() => {
    navCtx.setCurrentPanelIndex("0");
  }, []);

  return (
    <PanelTemplate>
      <Outlet />
    </PanelTemplate>
  );
};

export default LineManagmentPanel;
