import { useEffect, useState } from "react";
import DocumentUpdate from "../../components/documentUpload/DocumentUpdate";
import UserDetails from "../../components/userDetails/UserDetails";
import { getUserById } from "../../service/service";
import { Form } from "react-bootstrap";
import InterferenceTable from "../../components/interferenceTable/InterferenceTable";

function UserPage({ userId, setSelectedUser, isAdmin }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getUserById(userId)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err.message));
  }, [userId]);
  return (
    <div className="user-page" style={{ margin: "50px" }}>
      {isAdmin ? (
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setSelectedUser(false)}
        >
          Back to table
        </span>
      ) : null}

      {isAdmin ? (
        <Form.Check
          type="checkbox"
          label="Mark Reviewed"
          checked={userData.isReviewed}
          onClick={() => userData.isReviewed}
        />
      ) : null}
      <h1>Welcome {userData?.name} </h1>
      <hr />
      <UserDetails userData={userData} />
      <hr />
      <InterferenceTable />
      <hr />
      <DocumentUpdate />
    </div>
  );
}

export default UserPage;
