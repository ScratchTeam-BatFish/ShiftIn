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
            message: {err: 'Error occurred in userController.createUser.'},
            status: 400,
        });
    }

    // Creating user and storing into mongoDB
    try {
        // check if username is unique
        const uniqueUsername = await User.findOne({username: username});

        if (uniqueUsername !== null) {
            console.log('username already exists');
            return next({
                log: 'userController.createUser error. Username already exists.',
                status: 400,
                message: { err: 'username already exists'}
            });
        } 

        // query the database
        const userInformation = await User.create({ 
            position: position, 
            firstName: firstName, 
            lastName: lastName, 
            username: username, 
            password: password,
        });

        // persist
        res.locals.user = userInformation;

        // testing
        console.log('user has been created: ', userInformation.username);
        console.log('account created');

        // return next
        return next();

    } catch (err) {
        next({
            log: `userController.createUser: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in userController.createUser. Check server logs for more details.'}
        });
    }
}

// Verify a user
userController.verifyUser = async (req, res, next) => {
    // Destructure from req.body
    const { username, password } = req.body;
    console.log(`${username} attempting to login`);
    
    //input error check aka: save money $$$
    if (!username || !password) {
        return next({
            log: 'missing user login parameters',
            message: {err: 'Error occurred in userController.verifyUser.'},
            status: 400,
        });
    }

    // Find in database
    try {
        const userLogin = await User.findOne( {username: username, password: password} ); 

        if (userLogin === null) {
            return res.status(203).redirect('/register');
        }

        if (userLogin) {
            res.locals.user = userLogin;
            console.log('User logged in...cash money')
            return next();
        }

    } catch(err) {
        return next({
            log: `userController.verifyUser: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in userController.verifyUser. Check server logs for more details.'}
        })
    }

    return next();
}

// Export userController
module.exports = userController;