import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserRequest } from "../../../service/service";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
export default function CreateProfile() {
  const [userInput, setUserInput] = useState({
    password: "",
    phoneNumber: "",
    name: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const updateUserInput = (field, input) => {
    const copy = { ...userInput, [field]: input };
    setUserInput(copy);
  };

  const createUser = (e) => {
    e.preventDefault();
    createUserRequest(userInput)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  return (
    <Form style={{ padding: "100px" }}>
      <h2>Create Profile</h2>
      {errorMessage ? <Alert variant={"danger"}>{errorMessage}</Alert> : null}
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="John D Smith"
          onChange={(e) => updateUserInput("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(e) => updateUserInput("email", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="555-555-5555"
          onChange={(e) => updateUserInput("phoneNumber", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          onChange={(e) => updateUserInput("password", e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => createUser(e)}>
        Submit
      </Button>
    </Form>
  );
}
