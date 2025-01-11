import styles from "./styles.module.css";

const FrontEndAnimation = () => {
  return (
    <div className={`${styles.conteinerFrontend}`}>
      <img src="vector/frontendZ3.svg" className={styles.FrontEndZ3} />
      <img
        src="vector/frontendZ2.svg"
        className={`${styles.FrontEndZ2} ${styles.animaceFrontend}`}
      />
      <img src="vector/frontendZ1.svg" className={styles.FrontEndZ1} />
    </div>
  );
};
export default FrontEndAnimation;
