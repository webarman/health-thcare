import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar expand="lg" className="main-header">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <span className="header-logo"> HEALTH-THCARE</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link className="header-a" to="/home">
              Home
            </Link>

            {user.email && <span>{user.displayName}</span>}
            {user.email ? (
              <button onClick={logOut}>log out</button>
            ) : (
              <Link className="header-a" to="/login">
                login
              </Link>
            )}
            <Link className="header-a" to="/register">
              Register
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
