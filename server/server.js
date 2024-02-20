const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const jwt = require ('jsonwebtoken');
const cookieParser = require('cookie-parser');
// Cors configuration - future
// Access to process.env variables - future

//secret key variable: should be in a third party NOT safe to have here. // development only
const SECRET_KEY = 'secretKey123';

// Import controllers
const userController = require('./controllers/userController');
const tokenController = require('./controllers/tokenController');
const shiftController = require('./controllers/shiftController');


// Port for server
const PORT = 3000;


// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Connect to MongoDB
mongoose.connect('mongodb+srv://robsin:Vany6GDnj75wi7Uq@redlipped.qpavfet.mongodb.net/');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


// handle requests for static files
app.use(express.static(path.join(__dirname, 'build')));

// handles loading the initial html page
app.get('/', (req, res) => {
  console.log('Request for INDEX.HTML received');
  const route = path.join(__dirname, '../build/index.html');
  return res.sendFile(route);
})

// handles the bundle.js files in the build folder
app.get('/bundle.js', (req, res) => {
  console.log('Request for bundle.js received')
  const route = path.join(__dirname, '../build/bundle.js');
  return res.sendFile(route);
})
// need get router to get shifts array and send back to the front end
app.get('/shifts', tokenController.authenticateToken, shiftController.getShifts, (req, res) => {
  console.log('---> routed through /shifts\n');
  const shifts = [res.locals.shifts, res.locals.availableShifts];
  console.log('shifts', shifts)
  return res.status(200).json(shifts);
  // json-shifts = "[ {date, employee(username), available, userId}, {}...]"
})
// Route (/register) GET 
// app.get('/register', (req, res) => {
//   console.log('we are in the server')
//   return res.status(200).send('GET request to /register');
// })

// Route (/register) GET 
// app.get('/register', (req, res) => {
//   console.log('we are in the server')
//   return res.status(200).send('GET request to /register');
// })

// Route (/register) GET 
// app.get('/register', (req, res) => {
//   console.log('we are in the server')
//   return res.status(200).send('GET request to /register');
// })


// Route (/register) POST // Create a user
app.post('/register', userController.createUser, (req, res) => {
  console.log('---> routed through /register');
  // server responds with status (201) indicating user has been created
  // server responds with user information of the new user created
  return res.status(201).json(res.locals.user);
})


// Route (/login) POST // Login a user
app.post('/login', userController.verifyUser, (req, res) => {
  console.log('---> routed through /login\n');
  // Return token to client side to save to localStorage
  console.log('res.locals.userInfo', res.locals.userInfo)
  
  const {username} = res.locals.userInfo;
  //created token for each user with 5min expiration
  const token = jwt.sign({username: username}, SECRET_KEY, { expiresIn: '5mins'});
  console.log('login:token:', token) // crazy long string
  // created cookie using token
  // sends cookie to client side after the user logins in
  const cookie = res.cookie('token', token, { 
    secure: true, 
    httpOnly: true, 
    maxAge: 300000
  });
  // console.log('cookie in login:', cookie.cookies);
  // server responds with status (202) indicating user has been accepted

  //trying to send cookie 
  return res.status(202).send('cookie sent');
})


// Route (/pickup) PATCH // Pickup a shift
app.patch('/addshift', shiftController.pickupShift, (req, res) => {
  console.log('---> routed through /addshift');
  // server responds with status (202) indicating update to shift has been accepted
  // server responds with shift that was dropped
  return res.status(202).send('shift added');
})


// Route (/drop) PATCH // Drop a shift
app.patch('/dropshift', shiftController.dropShift, (req, res) => {
  console.log('---> routed through /drop');
  // server responds with status (202) indicating update to shift has been accepted
  // server responds with shift that was picked up
  return res.status(202).json({});
})


// // Route (/assign) POST
// app.post('/assign', shiftController.assignShift, (req, res) => {
//   // server responds with status (201) indicating shift has been created
//   // server responds with shift information of the new shift created
//   console.log('---> routed through /assign');
//   return res.status(201).json(res.locals.shift);
// })

// After all routes, catch all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// Global error handler
app.use((err, req, res, next) => {
  // defaultError object
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { error: 'An error occured'}
  }
  // combine empty object, defaultError, and (err) prioritizing (err)
  const errorObject = Object.assign({}, defaultError, err);
  return res.status(errorObject.status).json(errorObject.message);
});




// start server listener
app.listen(PORT, () => {
    console.log(`Backend server app listening on port ${PORT}`);
  });



 