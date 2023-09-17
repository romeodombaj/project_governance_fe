import styles from "./HumanResourcesPanel.module.css";
import LineGroups from "./HumanGroups";
import LineEmployees from "./HumanEmployees";
import PanelTemplate from "../Ui/PanelTemplate";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import { useEffect, useContext } from "react";
import NavigationContext from "../store/navigation-context";
import { useNavigate } from "react-router-dom";
import useGetData from "../hooks/use-get-data";

const HumanResourcesPanel = () => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const [groupList, getGroupList] = useGetData();
  const [employeeList, getEmployeeList] = useGetData();

  useEffect(() => {
    getGroupList("work_groups");
    getEmployeeList("employees");

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
