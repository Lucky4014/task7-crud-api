// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware — JSON body parse karne ke liye
app.use(express.json());

// Routes
app.use("/api/inventory", require("./routes/inventory"));

// Root route
app.get("/", (req, res) => {
  res.send("📦 Inventory API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});