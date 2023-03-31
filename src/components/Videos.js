import styles from "../css/Videos.module.css";
import Video from "./Video";
export default function Videos() {
  return (
    <div class={styles.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}
