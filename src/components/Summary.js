import styles from "../css/Summary.module.css";
import image from "../img/success.png";
export default function Summary() {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={styles.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}
