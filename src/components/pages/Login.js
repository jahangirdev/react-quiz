import styles from "../../css/Login.module.css";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm className={styles.login} />
      </div>
    </>
  );
}
