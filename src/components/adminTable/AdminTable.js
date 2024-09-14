import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { adminGetUsers } from "../../service/service";

export default function AdminTable({ selectedUser, setSelectedUser }) {
  const [users, setUsers] = useState([]);
  // const [errMessage, setErrMessage] = useState("");
  useEffect(() => {
    adminGetUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err.message));
  }, [selectedUser]);

  const renderRows = () => {
    return users
      .map((user) => {
        return (
          <tr
            onClick={() => {
              setSelectedUser(user.id);
            }}
            style={{ cursor: "pointer" }}
          >
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.phoneNumber}</td>
            <td>{user?.dateOfCreation}</td>
            <td>{user?.isReviewed.toString()}</td>
          </tr>
        );
      })
      .sort((a, b) => a.dateOfCreation - b.dateOfCreation);
  };
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Profile Created</th>
          <th>Reviewed</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  );
}
