import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav.Item>
      {!user ? (
        <Nav.Item>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Nav.Link as={Link} to="/login" onClick={(e) => setUser(null)}>
            Log out
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
}
