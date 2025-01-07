import styles from "./styles.module.css";

const LandingPageANim = () => {
  return (
    <div className="w-full self-center mb-10 md:mb-0 sm:w-2/3 h-full lg:h-[90%] ">
      <div className={styles.container_logo}>
        <img
          src="vector/logo_postava.svg"
          className={`${styles.postavaLogo} `}
        />
        <img src="vector/logo_tab1.svg" className={styles.tabJedna} />
        <img
          src="vector/postava_hodne_velke.svg"
          className={`${styles.postavaLogoVelke} hidden`}
        />
        <img src="vector/logo_tab2.svg" className={styles.tabDva} />
        <img src="vector/logo_tab3.svg" className={styles.tabTri} />
        <img src="vector/logo_tab4.svg" className={styles.tabCtyri} />
      </div>
    </div>
  );
};
export default LandingPageANim;
