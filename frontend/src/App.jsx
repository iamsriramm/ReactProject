import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Mobiles from "./components/Mobiles";
import SignUp from "./components/SignUp";
import Cup from "./components/Cup";
import SingleBar from "./components/SingleBar";
import SingleCup from "./components/SingleCup";
import SignIn from "./components/SignIn";

function App() {
  const [user1, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Load session data on app start
  useEffect(() => {
    const storedUser = sessionStorage.getItem("getUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // ✅ Convert string to object
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    sessionStorage.clear(); // Clear session storage
    setUser(null); // Update state
    navigate("/signin"); // Redirect to login page
  };

  return (
    <div>
      {/* ✅ Show login/logout buttons based on session */}
      <NavBar user={user1} onLogout={handleLogout} />

      {/* ✅ Show Welcome Message */}
      <h1>Welcome, {user1 ? user1.name : "Guest"}!</h1>

      <Routes>
        <Route path="/" element={<><Mobiles /> <Cup /></>} />
        <Route path="/mobiles/:id" element={<SingleBar />} />
        <Route path="/cups/:id" element={<SingleCup />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
