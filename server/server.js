const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
app.use(express.static(path.join(__dirname, 'build')));

// handles loading the initial html page and the bundle.js files in the build folder
app.get('/', (req, res) => {
  console.log('Request for INDEX.HTML received')
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.get('/bundle.js', (req, res) => {
  console.log('Request for bundle.js received')
  res.sendFile(path.join(__dirname, '../build/bundle.js'), {
  });
});


// start server listener
app.listen(port, () => {
    console.log(`Backend server app listening on port ${port}`)
  })