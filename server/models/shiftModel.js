// import mongoose
const mongoose = require('mongoose');

//create schema for shifts
const shiftSchema = new mongoose.Schema ({
  // required
  date: {
    type: String, required: true, 
  },
  employee: String,
  available: Boolean,
  userId: String,

  // extra
  // start_time: 
  // end_time: 
});


const Shift = mongoose.model('Shift', shiftSchema);

// export schema
module.exports = Shift;