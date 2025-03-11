import styles from "./styles.module.css";

const LandingPageANim = () => {
  return (
    <div className="w-full short:hidden self-start md:self-center h-[80%] max-w-2/3 mb-10 sm:mb-5 lg:mb-0 md:h-full lg:h-[90%] xl:h-[70%] ">
      <div className={styles.container_logo}>
        <img
          src="vector/logo_postava.svg"
          alt="obrázek postavy v animaci na úvodní stránce na velké obrazovce"
          className={`${styles.postavaLogo} `}
        />
        <img src="vector/logo_tab1.svg" className={styles.tabJedna} />
        <img
          src="vector/postava_hodne_velke.svg"
          alt="obrázek postavy v animaci na úvodní stránce"
          className={`${styles.postavaLogoVelke} hidden`}
        />
        <img
          src="vector/logo_tab2.svg"
          alt="první obrázek v animaci na úvodní stránce"
          className={`${styles.tabDva}`}
        />
        <img
          src="vector/logo_tab3.svg"
          alt="druhý obrázek v animaci na úvodní stránce"
          className={styles.tabTri}
        />
        <img
          src="vector/logo_tab4.svg"
          alt="třetí obrázek v animaci na úvodní stránce"
          className={styles.tabCtyri}
        />
      </div>
    </div>
  );
};
export default LandingPageANim;
