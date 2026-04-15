import { useState, JSX, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signup(name, email, password);
  };

  return (
    <div className="col-12" id="signup-wrapper">
      <form className="signup" onSubmit={handleSubmit}>
        <h3 className="auth-title">Sign up</h3>
        <label>Name:</label>
        <input
          className="input-box"
          type="text"
          placeholder="John Doe"
          // onchange handler so that when change happens we want to update the name state
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Email:</label>
        <input
          className="input-box"
          type="email"
          placeholder="johndoe@gmail.com"
          // onchange handler so that when change happens we want to update the email state
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>
        <input
          type="password"
          className="password-input"
          placeholder="Password"
          // onchange handler so that when change happens we want to update the password state
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className="auth-btn" disabled={isLoading}>
          Sign Up
        </button>
        {error && <div className="error">{error}</div>}
      </form>

      <p className="no-login">
        Already signed up?{" "}
        <Link
          className="account-link"
          to="https://fitrquest-frontend.onrender.com/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
