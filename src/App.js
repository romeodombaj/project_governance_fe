import styles from "./App.module.css";
import LineManagmentPanel from "./components/0_Line managment/LineManagmentPanel";
import NavBar from "./components/Ui/NavBar";



function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <NavBar />
        <LineManagmentPanel />
      </div>
    </div>
  );
}

export default App;
