import Button from "../../Ui/Button";
import Label from "../../Ui/Label";
import Input from "../../Ui/Input";
import styles from "./FeatureForm.module.css";
import usePostData from "../../hooks/use-post-data";
import usePatchData from "../../hooks/use-patch-data";
import { useEffect, useState } from "react";
import useDeleteData from "../../hooks/use-delete-data";

const FeatureForm = (props) => {
  const editData = props.editData.feature;
  const id = props.editData.id;
  const [name, setName] = useState(editData.name || "");
  const [conditions, setCondidionts] = useState(editData.conditions || "");
  const [duration, setDuration] = useState(editData.duration || "");
  const postData = usePostData();
  const patchData = usePatchData();
  const deleteData = useDeleteData();
  const postPath = "process_managment/features/add";
  let patchPath = `process_managment/features/update/${editData._id}`;
  let deletePath = `process_managment/features/delete/${editData._id}`;

  const onFeatureSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      conditions: conditions,
      duration: duration,
    };

    if (props.edit) {
      await patchData(data, patchPath).then((resp) => {
        if (resp.ok) {
          props.onClose();
        }
      });
    } else {
      const resp = await postData(data, postPath).then((resp) => {
        if (resp.ok) {
          props.onClose();
        }
      });
    }
  };

  const onFeatureDelete = async () => {
    await deleteData(deletePath).then((resp) => {
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

  useEffect(() => {
    setName(editData.name);
    setDuration(editData.duration);
    setCondidionts(editData.conditions);
    patchPath = `process_managment/features/update/${editData._id}`;
    deletePath = `process_managment/features/delete/${editData._id}`;
  }, [editData]);

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onFeatureSubmit}>
        <div className={styles.section}>
          <Label>
            <div className={styles.font}>{id}</div>
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
