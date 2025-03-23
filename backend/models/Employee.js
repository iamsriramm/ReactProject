const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String, // ✅ Store as String to avoid errors
    required: true,
    match: /^[0-9]{10}$/, // ✅ Ensures 10-digit phone number
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
