import styles from "../css/Form.module.css";
export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${styles.form}`} {...rest}>
      {children}
    </form>
  );
}
