import styles from "./LineListElement.module.css";
import exitIcon from "../../../assets/x-icon.png";
import useDeleteData from "../../hooks/use-delete-data";
import { useContext } from "react";
import LineManagmentContext from "../../store/line-managment-context";

const LineListElement = (props) => {
  const data = props.data;
  const index = props.i;
  const path = props.path;
  const isEmployee = props.isEmployee;
  const lineCtx = useContext(LineManagmentContext);

  const deleteData = useDeleteData();

  const onDeleteHandler = (e) => {
    const id = e.currentTarget.getAttribute("value");
    deleteData("", path + `/delete/${id}`).then((resp) => {
      if (resp.ok) {
        if (isEmployee) {
          lineCtx.getEmployees();
        } else {
          lineCtx.getGroups();
        }
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>{index}</div>
      <div className={styles.info}>{data.name}</div>
      <div className={styles.info}>{isEmployee && data.groupName}</div>
      <div
        className={styles["exit-wrapper"]}
        onClick={onDeleteHandler}
        value={data._id}
      >
        <img src={exitIcon} className={styles.exit} />
      </div>
    </div>
  );
};

export default LineListElement;
