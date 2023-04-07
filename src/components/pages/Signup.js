import styles from "../../css/Signup.module.css";
import Button from "../Button.js";
import Checkbox from "../Checkbox.js";
import Form from "../Form.js";
import Illustration from "../Illustration";
import TextInput from "../TextInput.js";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={styles.signup}>
          <TextInput type="text" placeholder="Enter your name" icon="person" />

          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="<span> I agree to the Terms & Conditions</span>" />

          <Button>
            <span>Signup Now</span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
