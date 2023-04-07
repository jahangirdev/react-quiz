import styles from "../css/Answers.module.css";
import Checkbox from "./Checkbox";
export default function Answers({ children }) {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text="A New Hope 1" />
    </div>
  );
}
