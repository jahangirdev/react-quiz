import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "../css/Account.module.css";
export default function Account() {
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <div className={styles.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span> {currentUser.displayName} </span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleLogout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
