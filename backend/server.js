const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();
const PORT = 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); 
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect('mongodb+srv://ziwexa:ziwexa123@users.bnz1p.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Routes
const authRoutes = require("./Routes/userDataAuth");
app.use("/api/auth", authRoutes);

//hostel-1-routes
const hosteloneRoutes = require("./Routes/hostel-1-routes")
app.use("/api", hosteloneRoutes);