import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { googleSignIn } = useAuth();
  return (
    <div className="login-form">
      <div className="login-section">
        <h2 className="login-title">Register</h2>
        <hr />
        <form>
          <input
            className="input-data"
            placeholder="Enter Your Name"
            type="text"
            required
            name="name"
            id=""
          />
          <br />
          <input
            className="input-data"
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            id=""
          />
          <br />
          <input
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
          already have a account <Link to="/login">login</Link>
        </p>
        <Button onClick={googleSignIn} className="google-login-btn">
          Google sign in
        </Button>
      </div>
    </div>
  );
};

export default Register;
