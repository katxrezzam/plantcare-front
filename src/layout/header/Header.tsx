import { Button } from "../../components";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className="width-wrapper">
        <div className={styles.HeaderContainer}>
          <div className={styles.Logo}>
            <Link className={styles.LogoLink} to="/">
              PLANT CARE
            </Link>
          </div>
          <div className={styles.ButtonsHeader}>
            <nav className={styles.Navigation}>
              <div className={styles.NavigationItem}>
                <Link className={styles.NavigationItemLink} to="/">
                  Inicio
                </Link>
              </div>
              <div className={styles.NavigationItem}>
                <Link className={styles.NavigationItemLink} to="/">
                  Como funciona
                </Link>
              </div>
              <div className={styles.NavigationItem}>
                <Link className={styles.NavigationItemLink} to="/">
                  Cultivos
                </Link>
              </div>
              <div className={styles.NavigationItem}>
                <Link className={styles.NavigationItemLink} to="/chat">
                  Probar
                </Link>
              </div>
            </nav>
            <div className={styles.Button}>
              <Button>Ingresar</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
