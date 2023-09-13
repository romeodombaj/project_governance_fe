import styles from "./LineList.module.css";
import LineListElement from "./LineListElement";

const LineList = (props) => {
  const data = props.data;
  const path = props.path;
  const search = props.search;
  const isEmployee = props.isEmployee;

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {data.map((item, i) => {
          if (item.name.includes(search)) {
            return (
              <LineListElement
                isEmployee={isEmployee}
                key={i}
                path={path}
                i={i}
                data={item}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default LineList;
