import styles from "../css/MiniPlayer.module.css";
import image from "../img/3.jpg";
export default function MiniPlayer() {
  return (
    <div className={`${styles.miniPlayer} ${styles.floatingBtn}`}>
      <span className={`material-icons-outlined ${styles.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${styles.close}`}> close </span>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
