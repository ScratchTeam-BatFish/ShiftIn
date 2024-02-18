const mongoose = require('mongoose');

// create schema for users
const userSchema = new mongoose.Schema({
    // Required
    position: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    email: { type: String, required: true},
    subscribe: { type: Boolean },
    
    // Extra
    startDate: String,
    availability: String,
    employeeId: String,
    clockinCode: Number,
    salary: Number,
    managerStatus: Boolean,
    totalShifts: String,
});


const User = mongoose.model('User', userSchema);

module.exports = User;