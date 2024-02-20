const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const jwt = require ('jsonwebtoken');
const cookieParser = require('cookie-parser');
// Cors configuration - future
// Access to process.env variables - future

//secret key variable: should be in a third party NOT safe to have here.
const secretKey = 'secretKey123';
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
app.get('/shifts', (req, res) => {
  return res.sendFile();
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

// Route (/register) POST - Create a user
app.post('/register', userController.createUser,(req, res) => {
  console.log('---> routed through /register\n');
  // send them to login
  // server responds with status (201) indicating user has been created
  // server responds with json() // takes JSON as input and parses it to produce a JS object
  // client side: if (response.status === 201) then redirect to ('/login') using useNavigate()
  return res.status(201).json(res.locals.user);
})


// Route (/login) POST / Login a user
app.post('/login', userController.verifyUser, (req, res) => {
  console.log('---> routed through /login\n');
  // Return token to client side to save to localStorage
  console.log('res.locals.userInfo', res.locals.userInfo)
  // const username = res.locals.userInfo.username;
  
  const {username} = res.locals.userInfo;
  //created token for each user with 5min expiration
  const token = jwt.sign({username: username}, secretKey, { expiresIn: '5mins'});
  console.log('token', token)
  // created cookie using token
  res.cookie('token', token, { httpOnly: true, maxAge: 300000});
  
  console.log('cookies', res.cookie)
  // server responds with status (202) indicating user has been accepted
  return res.status(202).json(res.locals.userInfo);
})


// Route (/dashboard) GET / Render dashboard
app.get('/dashboard', shiftController.getShifts, (req, res) => {
  console.log('---> routed through /dashboard\n');

  // server responds with status (202) indicated user has been accepted
  return res.status(202).json(res.locals.shifts);
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

// ??? Super critical
// After all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


// start server listener
app.listen(PORT, () => {
    console.log(`Backend server app listening on port ${PORT}`);
  });