import { Link } from "react-router-dom";
import styles from "../css/Video.module.css";
import image from "../img/3.jpg";
export default function Video() {
  return (
    <Link to="/quiz">
      <div class={styles.video}>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div class={styles.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
}
