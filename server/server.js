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


// start server listener
app.listen(PORT, () => {
    console.log(`Backend server app listening on port ${PORT}`);
  });