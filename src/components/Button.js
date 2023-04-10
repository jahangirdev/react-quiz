import styles from "../css/Button.module.css";
export default function Button({ className, children, text, ...rest }) {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
