//import shiftModel & userModel
const Schedule = require('../models/shiftModel.js');
const User = require('../models/userModel.js');


const shiftController = {};

// Pickup a shift
shiftController.pickupShift = (req, res, next) => {
console.log('req.body', req.body)
    // find shift by ID
    // check to see if it exists
    // check to see if shift is available

    // locate user by ID

    //
    return next();
}

// Drop a shift
shiftController.dropShift = (req, res, next) => {
    return next();
}

// Export shiftController
module.exports = shiftController;