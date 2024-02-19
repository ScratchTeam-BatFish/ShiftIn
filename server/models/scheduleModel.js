const mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema ({
  firstName: {type: String, required: true},
  position: {type: String, required: true},
  shifts: [
    {}
    {}
  ]
})