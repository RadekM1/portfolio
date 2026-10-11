import styles from "./styles.module.css";
import { useTranslations } from "next-intl";

const LandingPageANim = () => {
  const t = useTranslations("Landing.Alt");
  return (
    <div className="w-full short:hidden self-start md:self-center h-[80%] max-w-2/3 mb-10 sm:mb-5 lg:mb-0 md:h-full lg:h-[90%] xl:h-[70%] ">
      <div className={styles.container_logo}>
        <img
          src="/vector/logo_postava.svg"
          alt={t("character")}
          className={`${styles.postavaLogo} `}
        />
        <img
          src="/vector/logo_tab1.svg"
          alt={t("table1")}
          className={styles.tabJedna}
        />

        <img
          src="/vector/logo_tab2.svg"
          alt={t("table2")}
          className={`${styles.tabDva}`}
        />
        <img
          src="/vector/logo_tab3.svg"
          alt={t("table3")}
          className={styles.tabTri}
        />
        <img
          src="/vector/logo_tab4.svg"
          alt={t("table4")}
          className={styles.tabCtyri}
        />
      </div>
    </div>
  );
};
export default LandingPageANim;
