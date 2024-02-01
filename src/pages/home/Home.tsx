import styles from "./Home.module.css";
import { HomeBanner, HowItWorks } from "./components";

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className="width-wrapper">
        <HomeBanner />
        <HowItWorks />
      </div>
    </section>
  );
}
