import { useState } from "react";
import NavBar from "./components/nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import CreateProfile from "./pages/login/create-profile/CreateProfile";
import UserPage from "./pages/userPage/UserPage";

function App() {
  const [user, setUser] = useState({});
  const homeSwitch = () => {
    if (!user) {
      return <Home />;
    }
    if (user.role === "admin") {
      return <Admin loggedInUser={user} />;
    }
    return <UserPage user={user.id} />;
  };
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/contact" element={<div>contact</div>}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route path="/login/create-profile" element={<CreateProfile />}></Route>
        <Route path="/" element={homeSwitch()}></Route>
      </Routes>
    </div>
  );
}

export default App;
