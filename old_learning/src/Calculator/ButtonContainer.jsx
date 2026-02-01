import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const handleButton = (buttonName) => {
    console.log(`you clicked ${buttonName}`);
  };
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={styles.buttons}
          onClick={() => handleButton(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
