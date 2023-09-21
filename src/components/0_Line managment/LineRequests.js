import { Fragment, useContext, useEffect, useState } from "react";
import React from "react";
import List from "../Ui/List";
import styles from "./LineRequests.module.css";
import LineContext from "../store/line-context";
import AddForm from "../Ui/AddFrom";
import Modal from "../Ui/Modal";
import useGetData from "../hooks/use-get-data";
import HumanResourcesContext from "../store/human-resources-context";
import usePatchData from "../hooks/use-patch-data";
import { useNavigate } from "react-router-dom";

const LineRequests = (props) => {
  const path = "position_requests";
  const lineCtx = useContext(LineContext);
  const hrCtx = useContext(HumanResourcesContext);
  const [search, setSearch] = useState("");
  const [isAssigning, setIsAssigning] = useState(false);
  const [criticalPath, getCriticalPath] = useGetData();
  const [inputs, setInputs] = useState([]);
  const [drops, setDrops] = useState([]);
  const [requestIndex, setRequestIndex] = useState(0);
  const patchData = usePatchData();
  const [requestList, setRequestList] = useState([]);

  const [selectedData, setSelectedData] = useState([]);
  const navigate = useNavigate();

  const columnNames = ["index", "project name", "Group", "feature index", ""];

  useEffect(() => {
    if (lineCtx.currentManager) {
      setRequestList(
        lineCtx.requestList.filter(
          (el) =>
            el.groupName === lineCtx.currentManager.groupName && !el.approved
        )
      );
    } else {
      navigate("../");
    }
  }, [lineCtx.requestList]);

  useEffect(() => {
    lineCtx.fetchAllData();
  }, []);

  const onFormSubmit = (tInputs, tDrops) => {
    let tempRequest = requestList[requestIndex];

    let tD = [];

    for (let i in tDrops) {
      tD.push({
        skill: tDrops[i].name,
        employee: tDrops[i].value,
      });
    }

    tempRequest = {
      ...tempRequest,
      skills: tD,
    };

    tempRequest.approved = true;

    patchData(
      tempRequest,
      `position_requests/update/${requestList[requestIndex]._id}`
    );

    closeForm();
  };

  const openForm = () => {
    setIsAssigning(true);
  };

  const closeForm = () => {
    setIsAssigning(false);
  };

  const onElementClick = async (e) => {
    const index = e.target.getAttribute("index");
    setRequestIndex(index);

    const res = await getCriticalPath(
      `critical_paths/${requestList[index].projectId}`
    );

    const feature = res[0].calculatedArray.filter(
      (el) => el.i === requestList[requestIndex].featureIndex
    );

    let tempDrops = [];

    tempDrops = [
      {
        name: feature[0].skill,
        value: "",
        dataList: hrCtx.employeeList
          .filter((el) => el.skills === feature[0].skill)
          .map((e) => {
            return { name: e.name + " " + e.surname };
          }),
      },
    ];

    /*for (let i in skills) {
      tempDrops.push({
        name: skills[i],
        value: "",
        dataList: hrCtx.employeeList
          .filter((el) => el.skills === skills[i])
          .map((e) => {
            return { name: e.name + " " + e.surname };
          }),
      });
    }*/

    setDrops(tempDrops);
    openForm();
  };

  return (
    <Fragment>
      {isAssigning && (
        <Modal onClose={closeForm}>
          <AddForm inputs={inputs} drops={drops} onAddNew={onFormSubmit} />
        </Modal>
      )}
      <div className={styles.wrapper}>
        <div className={styles.title}>Position requests</div>
        <div className={styles.list}>
          <List
            columns={columnNames}
            onElementClick={onElementClick}
            path={path}
            data={requestList}
            search={search}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default LineRequests;
