//import shiftModel & userModel
const Shift = require('../models/shiftModel.js');
const Schedule = require('../models/shiftModel.js');
const User = require('../models/userModel.js');


const shiftController = {};

// Create a shift
shiftController.getShifts = async (req, res, next) => {
    console.log('GET request to /dashboard');
    console.log('req.body contains: ', req.body);

    // res.body should have userId
    const { userId } = req.body; // note: we have to decide where
    console.log('userId: ', userId);

    // Save $$$ // Check for missing parameters
    if (!userId) {
        return next({
            log: 'missing user id. unable to generate user shifts',
            message: {err: 'Error occurred in shiftController.createShift.'},
            status: 400,
        });
    }
    try {
        // query the database
        console.log('querying database...')
        const shiftsArray = await Shift.find({ userId: userId});
        console.log('found shifts:', shiftsArray);

        // persist the data
        res.locals.shiftsArray = shiftsArray;
        console.log('storing shiftsArray on res.locals.shifts: ', res.locals.shifts);

        // testing
        console.log(`${shiftsArray.length} shifts have been retrieved for user ${userId}`);

        // return next
        console.log('exiting shiftController.getShifts');
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