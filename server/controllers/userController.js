// Import jwt, possible express and cookie parser
// const jwt = require ('jsonwebtoken');
// const cookieParser = require('cookie-parser');
const User = require('../models/userModel.js');

const userController = {};

// Token values
// Create a user
userController.createUser = async (req, res, next) => {
    console.log('POST request to /register')
    console.log('req.body contains: ', req.body);

    // Destructure the properties off the object (req.body) from the form
    // Took out position
    const { firstName, lastName, username, password } = req.body;

    //saving money here $$$$
    if (!firstName || !lastName || !username || !password) {
        return next({
            log: 'missing user registration parameters',
            message: {err: 'Error occurred in userController.createUser.'},
            status: 400,
        });
    }

    // Creating user and storing into mongoDB
    try {
        console.log('checking for unique username');
        console.log('querying database...')
        console.log('checking for unique username');
        console.log('querying database...')
        const uniqueUsername = await User.findOne({username: username});

        console.log('uniqueUsername is: ', uniqueUsername);
        console.log('if null, then username does not exist in database');

        console.log('uniqueUsername is: ', uniqueUsername);
        console.log('if null, then username does not exist in database');

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
            firstName: firstName, 
            lastName: lastName, 
            username: username, 
            password: password,
        });
        console.log('user created and stored in database');
        // console.log("userInformation is: ", userInformation)
        console.log('user created and stored in database');
        // console.log("userInformation is: ", userInformation)

        // persist the data
        res.locals.user = userInformation;
        console.log('storing user information on res.locals.user: ', res.locals.user);

        // testing
        console.log('user has been created: ', userInformation.username);

        // return next
        console.log('exiting userController.createUser');
        return next();

    } catch (err) {
        return next({
            log: `userController.createUser: ERROR ${err}`,
            status: 400,
            message: {err: 'Error occurred in controller.createUser. Check server logs for more details.'}
        });
    }
}

// Verify a user
userController.verifyUser = async (req, res, next) => {
    console.log('POST request to /login')
    console.log('req.body contains: ', req.body);

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
        console.log('querying database...')
        const user = await User.findOne( {username: username, password: password} );
        console.log('user found: ', user);

        // check if the user found is null meaning user does not exist in database
        if (user === null) {
            console.log('no such user found');
            return res.status(203).redirect('/register');
        }
        if (user) {
            console.log('User logged in...cash money')
            console.log('storing logged in user information on res.locals.user');
    
            res.locals.userInfo = user;
            
            console.log('res.locals.userInfo: ', res.locals.userInfo);
            console.log('exiting userController.verifyUser');
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