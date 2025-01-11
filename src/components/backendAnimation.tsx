import styles from "./styles.module.css";

const BackEndAnimation = () => {
  return (
    <div className={`${styles.serverKontejner} flex flex-col`}>
      <div className={styles.serverPrvni}></div>
      <div className={styles.serverDruhy}></div>
      <div className={styles.serverTreti}></div>
      <div className={styles.blikServerZlutaKostkaJedna}></div>
      <div className={styles.blikServerZlutaKostkaDva}></div>
      <div className={styles.blikServerZlutaKostkaTri}></div>
      <div className={styles.blikServerZelenaKostkaJedna}></div>
      <div className={styles.blikServerZelenaKostkaDva}></div>
      <div className={styles.blikServerZelenaKostkaTri}></div>
    </div>
  );
};
export default BackEndAnimation;
