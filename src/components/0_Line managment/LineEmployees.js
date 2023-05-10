import styles from "./LineEmployees.module.css";
import { useState, useEffect, useContext } from "react";
import NavigationContext from "../store/navigation-context";
import useGetData from "../hooks/use-get-data";

const LineEmployees = () => {
  const navCtx = useContext(NavigationContext);
  // form input
  const [name, setName] = useState("name");
  const [surname, setSurname] = useState("surname");
  const [age, setAge] = useState("age");
  const [group, setGroup] = useState("group");
  //
  let employeeList = useGetData("line_managment/employees");
  // changing inputs

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const surnameChangeHandler = (event) => {
    setSurname(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const groupChangeHandler = (event) => {
    setGroup(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const employeeData = {
      name: name,
      surname: surname,
      age: age,
      work_group: group,
    };

    fetch("http://localhost:5000/line_managment/employees/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...employeeData,
      }),
    });
  };

  //

  return (
    <div className={styles.wrapper}>
      <form className={styles[`add-new-wrapper`]} onSubmit={onSubmitHandler}>
        <input onChange={nameChangeHandler} value={name}></input>
        <input onChange={surnameChangeHandler} value={surname}></input>
        <input onChange={ageChangeHandler} value={age}></input>
        <input onChange={groupChangeHandler} value={group}></input>
        <button type="submit" className={styles[`add-new-button`]}>
          ADD NEW EMPLOYEE
        </button>
      </form>
      <div className={styles[`employee-list`]}>
        {employeeList.map((employee) => {
          return (
            <div key={employee._id} className={styles.employee}>
              <div>{employee.name}</div>
              <div>{employee.surname}</div>
              <div>{employee.age}</div>
              <div>{employee.work_group}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LineEmployees;
