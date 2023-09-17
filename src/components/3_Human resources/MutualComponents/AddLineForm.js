import styles from "./AddLineForm.module.css";
import Label from "../../Ui/Label";
import Input from "../../Ui/Input";
import { useState } from "react";
import Button from "../../Ui/Button";
import usePostData from "../../hooks/use-post-data";
import Dropdown from "../../Ui/Dropdown";
import { useContext } from "react";
import LineManagmentContext from "../../store/human-resources-context";

const AddLineForm = (props) => {
  const path = props.path;
  const isEmployee = props.isEmployee;
  const postData = usePostData();
  const lineCtx = useContext(LineManagmentContext);
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  const onNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const onGroupChange = (e) => {
    const value = e.target.value;
    setGroup(value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    let data;

    if (!isEmployee) {
      data = {
        name: name,
      };
    } else {
      const groupId = lineCtx.groupList.find((el) => el.name === group);
      data = {
        name: name,
        groupName: group,
        groupId: groupId._id,
      };
    }

    postData(data, path + "/add").then((resp) => {
      if (resp.ok) {
        if (isEmployee) {
          lineCtx.getEmployees();
        } else {
          lineCtx.getGroups();
        }
        props.onClose();
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmitForm}>
        <div className={styles.section}>
          <Label>Name</Label>
          <Input onChange={onNameChange} value={name} />
        </div>
        {isEmployee && (
          <div className={styles.section}>
            <Label>Select group</Label>
            <Dropdown data={lineCtx.groupList} onChange={onGroupChange} />
          </div>
        )}

        <div className={styles.separator} />
        <Button isLight={true} type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddLineForm;
