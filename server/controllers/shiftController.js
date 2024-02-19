//import shiftModel & userModel
const Shift = require('../models/shiftModel.js');
const User = require('../models/userModel.js');


const shiftController = {};

// Get a logged in user's shifts
shiftController.getShifts = async (req, res, next) => {
    console.log('GET request to /dashboard');
    console.log('req.body contains: ', req.body);

    const { userId } = req.body;
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
        console.log('storing shiftsArray on res.locals.shifts: ', res.locals.shiftsArray);

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
    console.log('PATCH request to /pickup');
    console.log('req.body contains: ', req.body);

    return next();
}

// Drop a shift
shiftController.dropShift = (req, res, next) => {
    console.log('PATCH request to /drop');
    console.log('req.body contains: ', req.body);
    
    return next();
}

// Export shiftController
module.exports = shiftController;