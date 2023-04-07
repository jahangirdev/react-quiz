import { Link } from "react-router-dom";
import styles from "../css/Account.module.css";
export default function Account() {
  return (
    <div className={styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="signup">Signup</Link>
      <Link to="/login">
        <span className="material-icons-outlined" title="Logout">
          logout
        </span>
      </Link>
    </div>
  );
}
