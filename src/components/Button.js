import styles from "../css/Button.module.css";
export default function Button({ text }) {
  return (
    <div class={styles.button}>
      <span>{text}</span>
    </div>
  );
}
