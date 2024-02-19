// import mongoose
const mongoose = require('mongoose');

//create schema for shifts
const shiftSchema = new mongoose.Schema ({
  date: {timeStamps: true },
  start_time: { Date, },
  end_time: { Date, },
  position: { type: String, required: true} ,
  // employee: { type: /*ref employee schema here*/, ref: 'user' }
});


const Schedule = mongoose.model('Schedule', shiftSchema);

// export schema
module.exports = Schedule;