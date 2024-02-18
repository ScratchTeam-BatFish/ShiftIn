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



// Route (/register) POST
app.post('/register', userController.createUser,(req, res, next) => {
  console.log('routing to /register!!');
  return res.status(200);
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