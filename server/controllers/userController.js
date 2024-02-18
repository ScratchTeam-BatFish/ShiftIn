// Import
const User = require('../models/userModel.js');

const userController = {};

// Token values
// Create a user
userController.createUser = async (req, res, next) => {
    console.log('req.body: ', req.body);
    // Destructure the properties off the object (req.body) from the form
    const { position, firstName, lastName, username, password } = req.body;

    //saving money here $$$$
    if (!position || !firstName || !lastName || !username || !password) {
        return next({
            log: 'missing user registration parameters',
            message: {err: 'Error occurred in controller.userController.'},
            status: 400,
        });
    }

    // Creating user and storing into mongoDB
    try {
        
    } catch (err) {
        next({
            log: `userController.createUser: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in controller.createUser. Check server logs for more details.'}
        });
    }

    
    return next();
}

// Verify a user
userController.verifyUser = (req, res, next) => {
    return next();
}

// Export userController
module.exports = userController;