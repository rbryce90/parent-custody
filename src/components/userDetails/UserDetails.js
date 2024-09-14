import React from "react";
import { Form } from "react-bootstrap";

export default function UserDetails({ userData }) {
  console.log("userData ==> ", userData);
  return (
    <div
      style={{
        marginRight: "55%",
      }}
    >
      <h3>User Details</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder={userData?.name} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder={userData?.email} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="email"
            placeholder={userData?.phoneNumber || "unknown"}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
