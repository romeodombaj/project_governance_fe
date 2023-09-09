import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import NavigationContext from "../store/navigation-context";
import { useContext, useState } from "react";
import Project from "../1_Project managment/SingleProject/Project";
import TemporaryOption from "./TemporaryOption";

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
    options: [{ id: 0, name: "Projects", link: "projects" }],
  },
  {
    id: 2,
    name: "Process Managment",
    link: "process",
    component: "<ProcessManagmentPanel/>",
    options: [{ id: 0, name: "Features", link: "features" }],
  },
];

const NavBar = () => {
  const navCtx = useContext(NavigationContext);
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {navCtx.currentPanelIndex &&
        navOptions[navCtx.currentPanelIndex].options.map((option) => {
          return (
            <Link
              to={`${option.link}`}
              className={styles.element}
              key={option.id}
            >
              {option.name}
            </Link>
          );
        })}

      <hr className={styles.separator} />

      <div className={styles[`open-elements`]}>
        {navCtx.openList &&
          navCtx.openList.map((option, i) => {
            return (
              <TemporaryOption
                key={i}
                option={option}
                isHovering={isHovering}
                index={i}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NavBar;
