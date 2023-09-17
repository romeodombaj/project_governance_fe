import styles from "./App.module.css";
import LineManagmentPanel from "./components/0_Line managment/LineManagmentPanel";
import Front from "./components/Front";
import NavBar from "./components/navigation/NavBar";
import { Routes, Route } from "react-router-dom";
import ProjectManagmentPanel from "./components/1_Project managment/ProjectManagmentPanel";
import ProcessManagmentPanel from "./components/2_Process magment/ProcessManagmentPanel";
import ProjectProjects from "./components/1_Project managment/ProjectList";
import ProcessFeatures from "./components/2_Process magment/ProcessFeatures";
import Project from "./components/1_Project managment/SingleProject/Project";
import HumanResourcesPanel from "./components/3_Human resources/HumanResourcesPanel";
import HumanGroups from "./components/3_Human resources/HumanGroups";
import HumanEmployees from "./components/3_Human resources/HumanEmployees";

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
        <Route path="/line" element={<LineManagmentPanel />}></Route>
        <Route path="/hr" element={<HumanResourcesPanel />}>
          <Route path="groups" element={<HumanGroups />} />
          <Route path="employees" element={<HumanEmployees />} />
        </Route>
        <Route path="/project" element={<ProjectManagmentPanel />}>
          <Route path="projects" element={<ProjectProjects />} />
          <Route path=":projectName" element={<Project />} />
        </Route>
        <Route path="/process" element={<ProcessManagmentPanel />}>
          <Route path="features" element={<ProcessFeatures />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
