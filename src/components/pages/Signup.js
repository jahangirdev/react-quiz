import styles from "../../css/Signup.module.css";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm.js";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm className={styles.signup} />
      </div>
    </>
  );
}
