import { Link } from "react-router-dom";
import styles from "../css/Nav.module.css";
import Logo from "../img/logo-bg.png";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
