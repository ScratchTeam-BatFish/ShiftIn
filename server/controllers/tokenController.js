const jwt = require('jsonwebtoken')
const tokenController = {};

//secret key
const SECRET_KEY = 'secretKey123';

// Verify the token
tokenController.authenticateToken = (req, res, next) => {
    // console.log('GET request to /shifts');
    // console.log('req.body contains: ', req.body);
    // console.log('response obj', res)
    // 1. access cookie, with token.
    // 2. decode token using jwt.verify()
    // 3. retrieve the payload, which includes the username property provided during login
 
    // const token = req.cookies.token;
    // console.log('token', token)

    return next();
}

// Export tokenController
module.exports = tokenController;