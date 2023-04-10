import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button.js";
import Form from "./Form.js";
import TextInput from "./TextInput.js";

export default function SignupForm({ className }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      Navigate("/");
    } catch (err) {
      console.log("Display error: ", err);
      setLoading(false);
      setError("Failed to login!");
    }
  };

  return (
    <Form className={className} onSubmit={handleSubmit}>
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
      <Button disabled={loading} type="submit">
        <span>Login</span>
      </Button>
      {error && <span className="error">{error}</span>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
