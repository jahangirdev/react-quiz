import { Link } from "react-router-dom";
import styles from "../css/ProgressBar.module.css";
import Button from "./Button";
export default function ProgressBar() {
  return (
    <div className={styles.progressBar}>
      <Link to="/">
        <div className={styles.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
      </Link>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% Cimplete!</div>
        <div className={styles.rangeBody}>
          <div className={styles.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={styles.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
}
