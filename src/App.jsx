import styles from "./App.module.css";
import Display from "./Calculator/Display.jsx";

const App = () => {
  return (
    <div className={styles.calculator}>
      <Display/>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttons}>C</button>
        <button className={styles.buttons}>1</button>
        <button className={styles.buttons}>2</button>
        <button className={styles.buttons}>+</button>
      </div>
    </div>
  );
};
export default App;
