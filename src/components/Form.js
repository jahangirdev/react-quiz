import styles from "../css/Form.module.css";
export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${styles.signup}  ${styles.form}`} {...rest}>
      {children}
    </form>
  );
}
