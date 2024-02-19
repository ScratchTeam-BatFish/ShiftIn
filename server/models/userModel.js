const mongoose = require('mongoose');

// "userId": 65d2b15c20a206595e53b1a2

// create schema for users
const userSchema = new mongoose.Schema({
    // Required
    position: { type: String},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    email: { type: String},
    subscribe: { type: Boolean },
    
    // Extra
    startDate: String,
    availability: Array,
    employeeId: String,
    clockinCode: Number,
    salary: Number,
    managerStatus: Boolean,
    totalShifts: String,
});


const User = mongoose.model('User', userSchema);

module.exports = User;