import styles from "../css/Illustration.module.css";
import signUpSVG from "../img/signup.svg";
export default function Illustration() {
  return (
    <div className={styles.illustration}>
      <img src={signUpSVG} alt="Signup" />
    </div>
  );
}
