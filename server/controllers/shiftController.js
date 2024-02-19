//import shiftModel & userModel
const Schedule = require('../models/shiftModel.js');
const User = require('../models/userModel.js');


const shiftController = {};

// Create a shift
shiftController.getShifts = async (req, res, next) => {
    // res.body should have userId
    const {userId} = res.body; // note: we have to decide where

    // Save $$$
    if (!date || !employee || !available || !userId) {
        return next({
            log: 'missing shift data login parameters',
            message: {err: 'Error occurred in shiftController.createShift.'},
            status: 400,
        });
    }
    try {
        console.log('querying database...')
        // Creating shift and storing into mongoDB
        const shift = await Shift.create( { date: date, employee: employee, available: available, userId: userId });
        console.log('found shifts:', shift);
        return next();
    } catch(err) {
        return next({
            log: `shiftController.createShift: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in shiftController.createShift. Check server logs for more details.'}
        })
    }
}


// Pickup a shift
shiftController.pickupShift = (req, res, next) => {
// console.log('req.body', req.body)
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