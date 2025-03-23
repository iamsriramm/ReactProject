import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For redirecting to login

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false); // Prevents multiple clicks
  const navigate = useNavigate(); // Redirect function

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "https://server-teal-zeta.vercel.app/signup/addemp",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Submitted Data:", formData);

      if (response.status === 201) {
        alert("Signup successful! Redirecting to login...");
        navigate("/login"); // Redirect to login page
      } else {
        alert(response.data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        error.response?.data?.message || "Something went wrong! Try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="^\d{10}$"
          title="Enter a valid 10-digit phone number"
          maxLength="10"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
