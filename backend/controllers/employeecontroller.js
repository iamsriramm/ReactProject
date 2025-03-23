const Employee = require("../models/Employee");

const createmp = async (req, res) => {
  try {
    const { name,email, password, address, phone } = req.body;

    // ✅ Validate input fields
    if (!name || !email || !password || !address || !phone) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // ✅ Check if employee already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already registered!" });
    }

    // ✅ Save new employee
    const employee = new Employee({ name,email, password, address, phone });
    await employee.save();

    res.status(201).json({ message: "Employee created successfully!", employee });
  } catch (error) {
    console.error("Error creating employee:", error); // ✅ Logs full error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { createmp };
