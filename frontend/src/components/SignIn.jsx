import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://server-teal-zeta.vercel.app/verify/login",
        { email, password }
      );

      setMessage(response.data.message); // Show success message

      // ✅ Store token & user details in sessionStorage
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("getUser", JSON.stringify(response.data.getUser)); // Store user details

      alert("Login Successful! Redirecting...");
      navigate("/"); // ✅ Redirect to home page

    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="but1">Login</button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
