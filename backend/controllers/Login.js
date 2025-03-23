const express = require("express");
const bcrypt = require("bcryptjs"); // ✅ Import bcrypt for password hashing
const jwt = require("jsonwebtoken"); // ✅ Import JWT for token-based authentication
const User = require("../models/Employee");

const HandleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // ✅ Validate Input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // ✅ Fetch user from database
    const getUser = await User.findOne({ email });

    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Compare Hashed Passwords
    const isMatch = await bcrypt.compare(password, getUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    console.log("Login Success");

    // ✅ Generate a JWT Token
    const token = jwt.sign({ userId: getUser._id }, "your_secret_key", { expiresIn: "1h" });

    // ✅ Send user data & token in response (Frontend will store it)
    return res.status(200).json({
      message: `Welcome ${getUser.name}`,
      token,
      getUser: {
        id: getUser._id,
        name: getUser.name,
        email: getUser.email,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { HandleLogin };
