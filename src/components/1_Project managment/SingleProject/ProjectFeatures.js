import styles from "./ProjectFeatures.module.css";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import FeatureElement from "./FeatureElement";
import { Fragment, useEffect, useState } from "react";
import FeatureForm from "./FeatureForm";
import useGetData from "../../hooks/use-get-data";

const ProjectFeatures = (props) => {
  const projectData = props.projectData;
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

  useEffect(() => {
    if (!isCreating) {
      console.log("fetch");
      getFeatures("process_managment/features");
    }
  }, [isCreating]);

  useEffect(() => {
    console.log(featureList);
  }, [featureList]);

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <Label>Project Features</Label>
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
      </div>
      {isCreating && (
        <FeatureForm editData={editData} onClose={closeForm} edit={isEditing} />
      )}
    </Fragment>
  );
};

export default ProjectFeatures;
