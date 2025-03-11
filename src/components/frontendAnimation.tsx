import styles from "./styles.module.css";

const FrontEndAnimation = () => {
  return (
    <div className={`${styles.conteinerFrontend}`}>
      <img
        src="vector/frontendZ3.svg"
        alt="animace logo front-end 3"
        className={styles.FrontEndZ3}
      />
      <img
        src="vector/frontendZ2.svg"
        alt="animace logo front-end 2"
        className={`${styles.FrontEndZ2} ${styles.animaceFrontend}`}
      />
      <img
        alt="animace logo front-end 1"
        src="vector/frontendZ1.svg"
        className={styles.FrontEndZ1}
      />
    </div>
  );
};
export default FrontEndAnimation;
