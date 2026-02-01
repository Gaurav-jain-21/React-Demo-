import styles from "./App.module.css";
import Display from "./Calculator/Display.jsx";
import ButtonContainer from "./Calculator/ButtonContainer.jsx";
const App = () => {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
};
export default App;
