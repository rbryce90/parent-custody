import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { Link } from "react-router-dom";
import { loginRequest } from "../../service/service";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const login = () => {
    loginRequest({ email, password })
      .then((res) => {
        setUser(res.data);
        navigate("/");
      })
      .catch((err) => setErrorMessage("Password or email are not correct"));
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <Form>
        {errorMessage ? <Alert variant={"danger"}>{errorMessage}</Alert> : null}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
          disabled={!email?.length || !password?.length}
        >
          Submit
        </Button>
      </Form>

      <div className="sign-up">
        <p>Don't have an account? </p>{" "}
        <Link style={{ textDecoration: "none" }} to="create-profile">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
