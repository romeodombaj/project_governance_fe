import styles from "./TemporaryOption.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import NavigationContext from "../store/navigation-context";
import React from "react";

import exitIcon from "../../assets/x-icon.png";

const TemporaryOption = (props) => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const option = props.option;
  const isHovering = props.isHovering;
  const key = props.index;

  const navigateToProject = () => {
    navCtx.navigateToItem(option, "project");
  };

  const closeProject = () => {
    navCtx.removeFromOpen(props.option, `/project/projects`);
  };

  return (
    <div
      className={`${styles.wrapper} ${styles[!isHovering && "wrapper-hover"]} ${
        styles[navCtx.selectedIndex === key && ["selected"]]
      }`}
    >
      <div
        onClick={navigateToProject}
        className={`${styles.name} ${styles[!isHovering && "name-hover"]}`}
      >
        {option.name}
      </div>

      <img
        src={exitIcon}
        onClick={closeProject}
        className={`${styles.exit} ${styles[!isHovering && "exit-hover"]}`}
      />
    </div>
  );
};

export default TemporaryOption;
