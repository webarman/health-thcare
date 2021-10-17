import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import initializeAuthFirebase from "../../../Firebase/Firebase.init";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

initializeAuthFirebase();
const auth = getAuth();

const Login = () => {
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  const { googleSignIn } = useAuth();

  const handleLoginRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-form">
      <div className="login-section">
        <h2 className="login-title">log-in</h2>
        <hr />
        <form onSubmit={handleLoginRegister}>
          <input
            onBlur={handleEmailChange}
            className="input-data"
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            id=""
          />
          <br />
          <input
            onBlur={handlePasswordChange}
            className="input-data"
            type="password"
            name="password"
            placeholder="Password"
            required
            id=""
          />
          <br />
          <input className="login-btn" type="submit" value="Log in" />
        </form>
        <h4>--------- or ---------</h4>
        <p>
          create a new account <Link to="/register">register</Link>
        </p>
        <Button onClick={googleSignIn} className="google-login-btn">
          Google sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
