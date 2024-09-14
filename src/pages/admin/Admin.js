import React, { useState } from "react";
import AdminTable from "../../components/adminTable/AdminTable";
import "./admin.css";
import UserPage from "../userPage/UserPage";
// import UserPage from "../userPage/UserPage";

export default function Admin() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="admin-page">
      {!selectedUser ? (
        <AdminTable
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
        />
      ) : (
        <UserPage
          userId={selectedUser}
          setSelectedUser={setSelectedUser}
          isAdmin={true}
        />
      )}
    </div>
  );
}
