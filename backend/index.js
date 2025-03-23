const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotEnv.config();
const app = express();
const signup = require("./routes/EmployeeRoutes");

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });

// API Routes
app.use("/signup", signup);
app.use("/verify", signup);

// ❌ REMOVE: app.listen(port, ()=>{ console.log("server running") });
// ✅ Instead, export the app
module.exports = app;
