import styles from "../css/Button.module.css";
export default function Button({ className, children, text }) {
  return <div class={`${styles.button} ${className}`}>{children}</div>;
}
