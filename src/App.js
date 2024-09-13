import NavBar from "./components/nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import CreateProfile from "./pages/login/create-profile/CreateProfile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/contact" element={<div>contact</div>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login/create-profile" element={<CreateProfile />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
