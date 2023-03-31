import styles from "../css/Nav.module.css";
import Logo from "../img/logo-bg.png";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="index.html" className={styles.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
