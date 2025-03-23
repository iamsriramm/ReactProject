import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    password: "",
    address: "",
    phone: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup/addemp", formData, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Submitted Data:", formData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="^\d{10}$"
          title="Enter a valid 10-digit phone number"
          maxLength="10"
          required
        />

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
