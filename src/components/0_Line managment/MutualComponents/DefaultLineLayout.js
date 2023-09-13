import styles from "./DefaultLineLayout.module.css";
import LineList from "./LineList";
import Button from "../../Ui/Button";
import Input from "../../Ui/Input";
import { useState } from "react";
import AddLineForm from "./AddLineForm";

const DefaultLineLayout = (props) => {
  const data = props.data;
  const isEmployee = props.isEmployee;
  const path = props.path;

  const [search, setSearch] = useState("");
  const [formState, setFormState] = useState(false);

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Button onClick={openForm}>Add new</Button>
        {formState && (
          <AddLineForm
            onClose={closeForm}
            isEmployee={isEmployee}
            path={path}
          />
        )}
      </div>

      <div className={styles.right}>
        <div className={styles["input-wrapper"]}>
          <Input onChange={onSearchChange} value={search} />
        </div>

        <div className={styles["list-wrapper"]}>
          <LineList
            isEmployee={isEmployee}
            path={path}
            data={data}
            search={search}
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultLineLayout;
