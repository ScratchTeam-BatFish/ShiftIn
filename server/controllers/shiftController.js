//import shiftModel & userModel
const Shift = require('../models/shiftModel.js');
const User = require('../models/userModel.js');


const shiftController = {};

// Returns a list of the shifts
shiftController.getShifts = async (req, res, next) => {
    // need to locate shifts from user:
    // console.log('req.body', req.body) // as of now this is empty because nothing has been passed in, need cookie info from front end???

    // get an array back from token of available shifts to send to frontend
    // query the database

    // assume we have access to username
    // const username = res.locals.username;
    const username = 'santa';

    try {
        console.log('querying database...')
        // Getting shifts from mongoDB
        const shifts = await Shift.find({ employee: username }); // need to update user info on shifts db
        console.log('found shifts:', shifts);

        // persist the data
        res.locals.shifts = shifts;

        // return next
        return next();
    } catch(err) {
        return next({
            log: `shiftController.getShifts: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in shiftController.getShifts. Check server logs for more details.'}
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