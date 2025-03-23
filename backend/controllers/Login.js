const mongoose = require('mongoose');
const express = require('express');
const route = express.Router();
const User = require('../models/Employee');

const HandleLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email is provided
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        // Fetch user from database
        const getUser = await User.findOne({ email });

        if (!getUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare passwords
        if (password === getUser.password) {  // Ensure passwords are stored as plain text
            console.log("Login Success");
            return res.status(200).json({ message: `Welcome ${getUser.name}` });
        } else {
            return res.status(401).json({ message: "Password incorrect" });
        }

    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { HandleLogin };
