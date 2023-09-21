import Button from "../../Ui/Button";
import Label from "../../Ui/Label";
import Input from "../../Ui/Input";
import styles from "./FeatureForm.module.css";
import usePostData from "../../hooks/use-post-data";
import usePatchData from "../../hooks/use-patch-data";
import { useContext, useEffect, useState } from "react";
import useDeleteData from "../../hooks/use-delete-data";
import Error from "../../Ui/Error";
import React from "react";
import Dropdown from "../../Ui/Dropdown";
import HumanResourcesContext from "../../store/human-resources-context";

const FeatureForm = (props) => {
  const editData = props.editData.feature;
  const id = props.editData.id;
  const [name, setName] = useState(editData.name || "");
  const [conditions, setCondidionts] = useState(editData.conditions || "");
  const [duration, setDuration] = useState(editData.duration || "");
  const [skill, setSkill] = useState(editData.skill || "");
  const [group, setGroup] = useState(editData.group || "");
  const [error, setError] = useState("");
  const postData = usePostData();
  const patchData = usePatchData();
  const deleteData = useDeleteData();
  const postPath = "features/add";
  let patchPath = `features/update/${editData._id}`;
  let deletePath = `features/delete/${editData._id}`;
  const hrCtx = useContext(HumanResourcesContext);

  const onFeatureSubmit = async (e) => {
    e.preventDefault();

    if (name.length > 0 && duration.length > 0 && skill.length > 0) {
      const data = {
        projectId: props.projectData._id,
        name: name,
        conditions: conditions,
        duration: duration,
        skill: skill,
        groupName: group,
        employees: [],
      };

      if (props.edit) {
        await patchData(data, patchPath).then((resp) => {
          if (resp.ok) {
            props.onClose();
          }
        });
      } else {
        const resp = await postData(data, postPath).then((resp) => {
          console.log(resp);
          if (resp.ok) {
            props.onClose();
          }
        });
      }
    } else {
      setError("Make sure to fill NAME, DURATION and SKILL fields ");
    }
  };

  const onFeatureDelete = async () => {
    const data = {
      projectId: props.projectData._id,
      name: name,
      conditions: conditions,
      duration: duration,
      skill: skill,
    };

    await deleteData(data, deletePath).then((resp) => {
      if (resp.ok) {
        console.log(resp);
        props.onClose();
      }
    });
  };

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const onChangeConditions = (e) => {
    const value = e.target.value;
    setCondidionts(value);
  };

  const onChangeDuration = (e) => {
    const value = e.target.value;
    setDuration(value);
  };

  const onChangeSkill = (e) => {
    const value = e.target.value;
    setSkill(value);
  };

  const onChangeGroup = (e) => {
    const value = e.target.value;
    setGroup(value);
  };

  useEffect(() => {
    setName(editData.name);
    setDuration(editData.duration);
    setCondidionts(editData.conditions);
    patchPath = `features/update/${editData._id}`;
    deletePath = `features/delete/${editData._id}`;
  }, [editData]);

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onFeatureSubmit}>
        <Error value={error} />
        <div className={styles.section}>
          <Label>
            <div className={`${styles.font} ${styles.id}`}>{id}</div>
          </Label>
          <Label>
            <div className={styles.font}>{props.id}</div>
          </Label>
        </div>

        <div className={styles.section}>
          <Label>
            <div className={styles.font}>Name</div>
          </Label>
          <div className={styles.input}>
            <Input onChange={onChangeName} value={name}></Input>
          </div>
        </div>

        <div className={styles.section}>
          <Label>
            <div className={styles.font}>conditions</div>
          </Label>
          <div className={styles.input}>
            <Input onChange={onChangeConditions} value={conditions}></Input>
          </div>
        </div>

        <div className={styles.section}>
          <Label>
            <div className={styles.font}>Duration</div>
          </Label>
          <div className={styles.input}>
            <Input onChange={onChangeDuration} value={duration}></Input>
          </div>
        </div>

        <div className={styles.section}>
          <Label>
            <div className={styles.font}>Skill</div>
          </Label>
          <div className={styles.input}>
            <Input onChange={onChangeSkill} value={skill}></Input>
          </div>
        </div>

        <div className={styles.section}>
          <Label>
            <div className={styles.font}>Group</div>
          </Label>
          <div className={styles.input}>
            <Dropdown
              data={hrCtx.groupList}
              onChange={onChangeGroup}
              value={group}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <Button type="submit" isLight={true}>
            Save
          </Button>
          {props.edit && (
            <Button onClick={onFeatureDelete} isLight={true}>
              delete
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FeatureForm;
