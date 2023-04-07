import styles from "../../css/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration />
        <Form className={`${styles.login} ${styles.form}`}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Login</span>
          </Button>

          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
