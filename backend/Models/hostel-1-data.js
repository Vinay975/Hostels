const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    ownerName: String,
    contactNumber: String,
    secondContactNumber: String,
    email: String,
    hostelName: String,
    location: String,
    numberOfFloors: Number,
    numberOfRooms: Number,
    gender: String,
    profilePhoto: String, // Stores filename
    sharing: [String],
});

module.exports = mongoose.model("HostelOne", hostelSchema, "hostelone");
