const express = require("express");
const multer = require("multer");
const path = require("path");
const Hostel = require("../Models/hostel-1-data");

const router = express.Router();


// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});
const upload = multer({ storage });

// POST route to add hostel record
router.post("/add-hostel", upload.single("profilePhoto"), async (req, res) => {
    try {
        const { ownerName, contactNumber, secondContactNumber, email, hostelName, location, numberOfFloors, numberOfRooms, gender, sharing } = req.body;

        const newHostel = new Hostel({
            ownerName,
            contactNumber,
            secondContactNumber,
            email,
            hostelName,
            location,
            numberOfFloors,
            numberOfRooms,
            gender,
            profilePhoto: req.file ? req.file.filename : null,
            sharing: sharing ? sharing.split(",") : [],
        });

        await newHostel.save();
        res.status(201).json({ message: "Hostel record added successfully", hostel: newHostel });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
