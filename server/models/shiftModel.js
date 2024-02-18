// import mongoose
const mongoose = require('mongoose');

//create schema for shifts
const shiftSchema = new mongoose.Schema ({
  date: {},
  start_time: {},
  end_time: {},
  position: { type: String, required: true} ,
  // employee: { type: /*ref employee schema here*/, ref: 'user' }
});


const Schedule = mongoose.model('Schedule', shiftSchema);

// export schema
module.exports = Schedule;