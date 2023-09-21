import styles from "./DefaultHRLayout.module.css";
import Button from "../../Ui/Button";
import Input from "../../Ui/Input";
import { useContext, useState } from "react";
import List from "../../Ui/List";
import AddForm from "../../Ui/AddFrom";
import HumanResourcesContext from "../../store/human-resources-context";
import usePostData from "../../hooks/use-post-data";
import React from "react";
import usePatchData from "../../hooks/use-patch-data";

const DefaultHRLayout = (props) => {
  const data = props.data;

  const isEmployee = props.isEmployee;
  const path = props.path;
  const postData = usePostData();
  const hrCtx = useContext(HumanResourcesContext);
  const [search, setSearch] = useState("");
  const [formState, setFormState] = useState(false);
  const patchData = usePatchData();

  const openForm = () => {
    setFormState(true);
  };

  const closeForm = () => {
    setFormState(false);
  };

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onAddNew = (tempInputs, tempDrops) => {
    console.log(onAddNew);
    let rData;

    if (!isEmployee) {
      rData = {
        name: tempInputs[0].value,
      };
    } else {
      const groupId = hrCtx.groupList.find(
        (el) => el.name === tempDrops[0].value
      );
      rData = {
        name: tempInputs[0].value,
        surname: tempInputs[1].value,
        skills: tempInputs[2].value,
        groupName: tempDrops[0].value,
        groupId: groupId._id,
      };

      if (rData.skills === "line manager") {
        patchData(
          {
            name: rData.groupName,
            manager: rData.name,
          },
          `work_groups/update/${groupId._id}`
        );
      }
    }

    postData(rData, path + "/add").then((resp) => {
      if (resp.ok) {
        if (isEmployee) {
          hrCtx.getEmployees();
        } else {
          hrCtx.getGroups();
        }
        closeForm();
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Button onClick={openForm}>Add new</Button>
        {formState && (
          <AddForm
            onClose={closeForm}
            onAddNew={onAddNew}
            inputs={props.form.inputs}
            drops={props.form.drops}
            isEmployee={isEmployee}
            path={path}
          />
        )}
      </div>

      <div className={styles.right}>
        <div className={styles["input-wrapper"]}>
          <Input
            index={0}
            placeholder="Search..."
            onChange={onSearchChange}
            value={search}
          />
        </div>

        <div className={styles["list-wrapper"]}>
          <List
            isEmployee={isEmployee}
            columns={props.columnNames}
            path={path}
            data={data}
            search={search}
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultHRLayout;
