// import mongoose
const mongoose = require('mongoose');

//create schema for shifts
const shiftSchema = new mongoose.Schema ({
  // required
  date: String,
  employee: {
    type: String, required: true, 
  },
  available: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
},
  // extra
  // start_time: 
  // end_time: 
});


const Shift = mongoose.model('Shift', shiftSchema);

// export schema
module.exports = Shift;