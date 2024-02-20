//import shiftModel & userModel
const Shift = require('../models/shiftModel.js');
const User = require('../models/userModel.js');


const shiftController = {};

// Returns a list of the shifts
shiftController.getShifts = async (req, res, next) => {
    // res.body should have userId
    console.log('GET request to /dashboard');
    console.log('req.body contains: ', req.body);
    const {userId} = req.body; // note: we have to decide where

    // get an array back from token of available shifts to send to frontend
    // query the database

    // assume we have access to username
    const username = res.locals.username;
    

    try {
        // query the database
        console.log('querying database...')
        // Getting shifts from mongoDB
        const shifts = await Shift.find({ employee: username }); // need to update user info on shifts db
        console.log('found shifts:', shifts);

        const availableShifts = await Shift.find({ available: true }); // fix if employee is null
        console.log('found available shifts: ', availableShifts);

        // persist the data
        res.locals.shifts = shifts;
        res.locals.availableShifts = availableShifts;

        // return next
        console.log('exiting shiftController.getShifts');
        return next();
    } catch(err) {
        return next({
            log: `shiftController.getShifts: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in shiftController.getShifts. Check server logs for more details.'}
        });
    }
}


// Assign (or create) a shift
shiftController.assignShift = async (req, res, next) => {
    console.log('POST request to /assign');
    console.log('req.body contains: ', req.body);

    // destructure variables
    const { date, employee, available, userId } = req.body;

    // check input parameters
    if (!date) {
        return next({
            log: 'missing shift information parameters',
            message: {err: 'Error occurred in shiftController.assignShift.'},
            status: 400,
        })
    }

    // Creating shift and storing in mongoDB
    try {
        console.log('querying database...');
        const shiftInformation = await Shift.create({
            date: date,
            employee: employee,
            available: available,
            userId: userId
        });
        console.log('shift created and stored in database');

        // persist the data
        res.locals.shift = shiftInformation;
        console.log('storing shift information on res.locals.shift: ', res.locals.shift)

        // testing
        const name = (res.locals.shift.employee || 'no one');
        console.log(`shift on ${res.locals.shift.date} created and assigned to ${name}`);

        // return next
        console.log('exiting shiftController.assignShift');
        return next();

    } catch (err) {
        return next({
            log: `shiftController.assignShift: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in shiftController.assignShift. Check server logs for more details.'}
        });
    }
}


// Pickup a shift
shiftController.pickupShift = (req, res, next) => {
    console.log('PATCH request to pickup');
    console.log('req.body contains: ', req.body);
    // find shift by ID
    // check to see if it exists
    // check to see if shift is available

    // locate user by ID

    //
    return next();
}

// Drop a shift
shiftController.dropShift = (req, res, next) => {
    console.log('PATCH request to /drop');
    console.log('req.body contains: ', req.body);
    // find shift by ID
    // check to see if it exists
    // check to see if shift is available
    
    return next();
}

// Export shiftController
module.exports = shiftController;