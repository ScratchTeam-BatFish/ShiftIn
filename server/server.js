const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
// Cors configuration - future
// Access to process.env variables - future

// Import controllers


// Port for server
const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB

// handle requests for static files
app.use(express.static(path.join(__dirname, 'build')));

// handles loading the initial html page and the bundle.js files in the build folder
app.get('/', (req, res) => {
  console.log('Request for INDEX.HTML received');

  const path = path.join(__dirname, '../build/index.html');

  return res.sendFile(path);
})



app.get('/bundle.js', (req, res) => {
  console.log('Request for bundle.js received')

  const path = path.join(__dirname, '../build/bundle.js');

  return res.sendFile(path);
})


// start server listener
app.listen(PORT, () => {
    console.log(`Backend server app listening on port ${PORT}`)
  })