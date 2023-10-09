import React, { useState } from "react";
import { useRegisterMutation, useLoginMutation } from "../../reducers/auth";
import "./login-register.css";

const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();

  const handleRegister = async () => {
    try {
      await register({ email, password }).unwrap();
      setSuccessMessage("Registered successfully!");
    } catch (error) {
      console.error("Register failed:", error);
      setErrorMessage("Registration failed!");
    }
    setTimeout(() => {
      setEmail("");
      setPassword("");
      setSuccessMessage("");
      setErrorMessage("");
    }, 2000);
  };

  const handleLogin = async () => {
    try {
      await login({ email, password }).unwrap();
      setSuccessMessage("Logged in successfully!");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed!");
    }

    setTimeout(() => {
      setEmail("");
      setPassword("");
      setSuccessMessage("");
      setErrorMessage("");
    }, 2000);
  };

  return (
    <div className="big">
      <div className="big-container">
        <section className="input-container">
          <h5>E-Mail</h5>
          <input
            className="input"
            type="email" // Type is email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <h5>Password</h5>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="button-container">
          <button className="butt" onClick={handleRegister}>
            Register
          </button>
          <button className="butt" onClick={handleLogin}>
            Login
          </button>
          </div>
        </section>
        <div>
          {successMessage && (
            <div className="success-alert">{successMessage}</div>
          )}
          {errorMessage && <div className="error-alert">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
