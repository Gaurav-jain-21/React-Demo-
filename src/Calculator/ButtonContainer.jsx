import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttons}>C</button>
      <button className={styles.buttons}>1</button>
      <button className={styles.buttons}>2</button>
      <button className={styles.buttons}>+</button>
    </div>
  );
};
export default ButtonContainer;
