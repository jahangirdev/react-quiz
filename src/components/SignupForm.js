import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button.js";
import Checkbox from "./Checkbox.js";
import Form from "./Form.js";
import TextInput from "./TextInput.js";

export default function SignupForm({ className }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
      Navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  };

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter your name"
        icon="person"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <Checkbox
        text={<span> I agree to the Terms & Conditions</span>}
        onChange={(e) => setAgree(!agree)}
        checked={agree}
      />

      <Button disabled={loading}>
        <span>Signup Now</span>
      </Button>
      {error && <span className="error">{error}</span>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
