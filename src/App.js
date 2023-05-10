import styles from "./App.module.css";
import LineManagmentPanel from "./components/0_Line managment/LineManagmentPanel";
import Front from "./components/Front";
import NavBar from "./components/navigation/NavBar";
import { Routes, Route } from "react-router-dom";
import LineGroups from "./components/0_Line managment/LineGroups";
import LineEmployees from "./components/0_Line managment/LineEmployees";
import ProjectManagmentPanel from "./components/1_Project managment/ProjectManagmentPanel";
import ProcessManagmentPanel from "./components/2_Process magment/ProcessManagmentPanel";
import ProjectProject from "./components/1_Project managment/ProjectProject";
import ProcessFeatures from "./components/2_Process magment/ProcessFeatures";

const navOptions = [
  {
    id: 0,
    name: "Line Managment",
    link: "line",
    component: "<LineManagmentPanel/>",
    options: [
      { id: 0, name: "Groups", link: "groups" },
      { id: 1, name: "Employees", link: "employees" },
    ],
  },
  {
    id: 1,
    name: "Project Managment",
    link: "project",
    component: "<ProjectManagmentPanel/>",
    options: [
      { id: 0, name: "Projects", link: "projects" },
      { id: 1, name: "Employees", link: "employees" },
    ],
  },
  {
    id: 2,
    name: "Process Managment",
    link: "process",
    component: "<ProcessManagmentPanel/>",
    options: [
      { id: 0, name: "Processes", link: "processes" },
      { id: 1, name: "Employees", link: "employees" },
    ],
  },
];

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/line" element={<LineManagmentPanel />}>
          <Route path="groups" element={<LineGroups />} />
          <Route path="employees" element={<LineEmployees />} />
        </Route>
        <Route path="/project" element={<ProjectManagmentPanel />}>
          <Route path="projects" element={<ProjectProject />} />
        </Route>
        <Route path="/process" element={<ProcessManagmentPanel />}>
          <Route path="features" element={<ProcessFeatures />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
