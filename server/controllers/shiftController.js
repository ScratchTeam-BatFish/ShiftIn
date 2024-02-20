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
shiftController.pickupShift = async (req, res, next) => {
    console.log('PATCH request to /addshift');
    console.log('req.params contains: ', req.params);
    console.log('req.body contains: ', req.body);

    // create variable shift and assign to req.params
    const { shiftId } = req.params;

    // reassign documentId to shiftId
    
    // assume that we have the id of the shift
    const documentId = '65d4509bb16cad119f9df9d8'; // attempting to pickup shift
    // assume that we have the username of the user that is logged in
    const username = 'santa';
    
    
    try {
        // query database
        console.log('updating shift database...')

        //get shifts with matching id from mongoDb
        const matchingShifts = await Shift.findOneAndUpdate(
            {_id: documentId}, // search criteria
            {$set: {
                employee: username,
                available: false,
            }}, // the updates
        )
        
        // persist data
        res.locals.shiftAdded = matchingShifts;
        console.log('res.locals.shiftAdded: ', res.locals.shiftAdded);    

        // return next
        console.log('exiting shiftController.pickupShift');
        return next();
    } catch(err) {
        return next({
            log: `shiftController.pickupShift: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in shiftController.pickupShift. Check server logs for more details.'}
        });
    }   
}

// Drop a shift
shiftController.dropShift = (req, res, next) => {
    console.log('PATCH request to /drop');
    console.log('req.body contains: ', req.body);
    
    return next();
}

// Export shiftController
module.exports = shiftController;