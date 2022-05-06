const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let reservationSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
  numberOfDiners: {
    type: Number
  },
}, {
  collection: 'reservations'
})
module.exports = mongoose.model('Reservation', reservationSchema)