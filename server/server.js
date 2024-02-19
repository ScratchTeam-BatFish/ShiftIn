const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
// Cors configuration - future
// Access to process.env variables - future

// Import controllers
const userController = require('./controllers/userController');
const tokenController = require('./controllers/tokenController');
const shiftController = require('./controllers/shiftController');


// Port for server
const PORT = 3000;


// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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


// need app.get to go to dashboard?
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
  console.log('---> routed through /login');
  // server responds with status (202) indicating user has been accepted
  // server responds with user id of the logged-in user
  return res.status(202).json(res.locals.id);
})


// Route (/dashboard) GET // Render dashboard
app.get('/dashboard', shiftController.getShifts, (req, res) => {
  console.log('---> routed through /dashboard');
  // server responds with status (202) indicating user has been accepted
  // server responds with array of shifts
  return res.status(202).json(res.locals.shiftsArray);
})


// Route (/assign) POST
app.post('/assign', shiftController.assignShift, (req, res) => {
  // server responds with status (201) indicating shift has been created
  // server responds with shift information of the new shift created
  console.log('---> routed through /assign');
  return res.status(201).json({});
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


// To all other routes, send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


// start server listener
app.listen(PORT, () => {
    console.log(`Backend server app listening on port ${PORT}`);
  });