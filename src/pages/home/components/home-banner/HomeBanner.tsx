import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import styles from "./HomeBanner.module.css";

export default function HomeBanner() {

  const navigate = useNavigate()

  return (
    <section className={styles.HomeBanner}>
      <div className={styles.HomeBannerContainer}>
        <div className={styles.HomeBannerInfoContainer}>
          <h1 className={styles.HomeBannerInfoTitle}>
            Clasificacion de hongos en hojas de cultivo
          </h1>
          <p className={styles.HomeBannerInfoParagraph}>
            Este servicio web realizara un analisis comparativo de modelos de
            aprendizaje profundo para la clasificacion de enfermedades en las
            hojas de cultivos
          </p>
          <div onClick={() => navigate('/prediction')} className={styles.ButtonContainer}>
            <Button>Probar</Button>
          </div>
        </div>
        <div className={styles.HomeBannerImageContainer}>
          <img
            className={styles.BannerImage}
            src="https://ag.umass.edu/sites/ag.umass.edu/files/fact-sheets/images/Lateblight.jpg"
            alt="image-banner"
          />
        </div>
      </div>
    </section>
  );
}
