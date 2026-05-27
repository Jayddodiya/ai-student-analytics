const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const { modelName } = require("./models/User");

dotenv.config();

connectDB();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test Route
app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

app.use(
  "/api/auth",
  require("./routes/authRoutes")
); modelName


app.use(
  "/api/student",
  require("./routes/studentRoutes")
);

app.use(
  "/api/admin",
  require("./routes/adminRoutes")
);


// PORT
const PORT = process.env.PORT || 5000;


// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});