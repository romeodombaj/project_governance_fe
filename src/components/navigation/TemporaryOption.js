import styles from "./TemporaryOption.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import NavigationContext from "../store/navigation-context";

const TemporaryOption = (props) => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const option = props.option;
  const isHovering = props.isHovering;
  const key = props.index;

  const navigateToProject = () => {
    navCtx.navigateToItem(option, "project");
  };

  return (
    <div
      onClick={navigateToProject}
      className={`${styles.wrapper} ${
        styles[!isHovering && ["wrapper-hover"]]
      } ${styles[navCtx.selectedIndex === key && ["selected"]]}`}
    >
      {option.name}
    </div>
  );
};

export default TemporaryOption;
