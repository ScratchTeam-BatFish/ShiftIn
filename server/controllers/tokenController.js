const jwt = require('jsonwebtoken')
const tokenController = {};

//secret key
const SECRET_KEY = 'secretKey123';

// Verify the token
tokenController.authenticateToken = (req, res, next) => {
    // console.log('GET request to /shifts');
    // console.log('req.body contains: ', req.body);
    // console.log('response obj', res)
    
    // 1. access cookie and get token
    // const token =
    
    // check if token exists
    // if (!token) return res.status(401).send('Unauthorized');


    // 2. decode token using jwt.verify()
    // jwt.verify(token, SECRETKEY, (err, decoded) => {
    //     if (err) {
    //         return res.status(403).send('Forbidden');
    //     }
    // })

    // 3. retrieve the payload, which includes the username property provided during login
    // if token is valid, attach the decoded payload to the request object
    // req.user = decoded;
   
    // persist data
    // save username to res.locals.username

    // return next
    return next();
}

// Export tokenController
module.exports = tokenController;