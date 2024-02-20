const jwt = require('jsonwebtoken')
const tokenController = {};

//secret key
const SECRET_KEY = 'secretKey123';

// Verify the token
tokenController.authenticateToken = (req, res, next) => {
    // console.log('req.body contains: ', req.body);
    // console.log('response obj', res)
    
    // 1. access cookie and get token
    const token = req.cookies.token;
    console.log('token in token controller:', token)

    // check if token exists
    if (!token) return res.status(403).send('Unauthorized'); 

    // 2. decode token using jwt.verify()
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const username = decoded.username;
        console.log('username in tokenController.authenticateToken(): ', username);

        // persist the data
        res.locals.username = username;
        // return next
        return next();
    } catch (err) {
        return res.status(403).send('Forbidden');
    }
}

// Export tokenController
module.exports = tokenController;