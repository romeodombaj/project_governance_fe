import styles from "./ProjectFeatures.module.css";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import FeatureElement from "./FeatureElement";
import { Fragment, useEffect, useState } from "react";
import FeatureForm from "./FeatureForm";
import useGetData from "../../hooks/use-get-data";
import usePostData from "../../hooks/use-post-data";
import useDeleteData from "../../hooks/use-delete-data";
import React from "react";

const ProjectFeatures = (props) => {
  const projectData = props.projectData;
  const criticalPathData = props.criticalPathData;
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    feature: {
      _id: "",
      name: "",
      conditions: "",
      duration: "",
    },
    id: "",
  });

  const [featureList, getFeatures] = useGetData();
  const postData = usePostData();
  const deleteData = useDeleteData();

  const editFeature = (feature, id) => {
    closeForm();
    setTimeout(() => {
      setEditData({
        feature,
        id,
      });
      setIsEditing(true);
      openForm();
    }, [10]);
  };

  const addFeature = () => {
    closeForm();
    setTimeout(() => {
      setIsEditing(false);
      setEditData({
        feature: {
          id: "",
          name: "",
          conditions: "",
          duration: "",
        },
        id: "New feature",
      });
      openForm();
    }, [10]);
  };

  const openForm = () => {
    setIsCreating(true);
  };

  const closeForm = () => {
    setIsCreating(false);
  };

  const generateCritical = async () => {
    const data = {
      startDate: projectData.startDate,
      featureList: [...featureList],
    };

    const criticalId = props.criticalPathId;
    if (criticalId !== undefined) {
      deleteData("", `critical_paths/delete/${criticalId}`);
    }

    await postData(data, "critical_paths/add");
    const res = await props.getCriticalPath();

    let reqData = [];

    for (let i in data.featureList) {
      reqData.push({
        projectId: projectData._id,
        name: projectData.name,
        skill: featureList[i].skill,
        approved: false,
        groupName: featureList[i].groupName,
        featureIndex: i,
        featureName: res[0].calculatedArray[i].i,
        startDate: res[0].calculatedArray[i].startDate,
        finishDate: res[0].calculatedArray[i].finishDate,
      });
    }

    postData(reqData, "position_requests/addMany");
  };

  useEffect(() => {
    if (!isCreating) {
      getFeatures(`features/by_project/${projectData._id}`);
    }
  }, [isCreating]);

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <Label>Project Features</Label>
        <div className={styles.columns}>
          <div>ID</div>
          <div>Name</div>
          <div>Conditions</div>
          <div>Duration</div>
          <div>Skills</div>
        </div>
        <div className={styles["feature-list"]}>
          {featureList &&
            featureList.map((feature, i) => {
              return (
                <FeatureElement
                  key={i}
                  id={i}
                  onClick={editFeature}
                  value={feature}
                  feature={feature}
                />
              );
            })}

          <Button onClick={addFeature}>Add Feature</Button>
        </div>
        <Button onClick={generateCritical}>GENERATEE CRITICAL PATH</Button>
      </div>
      {isCreating && (
        <FeatureForm
          editData={editData}
          onClose={closeForm}
          edit={isEditing}
          projectData={projectData}
        />
      )}
    </Fragment>
  );
};

export default ProjectFeatures;
