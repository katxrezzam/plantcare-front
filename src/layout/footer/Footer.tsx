import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="width-wrapper" style={{width:'100%'}}>
        <div className={styles.FooterContainer}>
          <div className={styles.Logo}>
            <Link to="/">PLANTCARE</Link>
          </div>
          <div className={styles.FooterDescription}>
            <p className={styles.Paragraph}>&copy; 2024 Todos los derechos reservados</p>
            <p className={styles.Paragraph}>Jr. Jose Sants Chocano 367 Urb Joaquin Bellavista - Callao</p>
          </div>
          <div className={styles.ContactInfo}>
            <Link to='/'>F</Link>
            <Link to='/'>T</Link>
            <Link to='/'>I</Link>
            <Link to='/'>Y</Link>
            <Link to='/'>M</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
