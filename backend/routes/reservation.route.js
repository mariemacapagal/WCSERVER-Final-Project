const express = require('express');
const reservationRoute = express.Router();
// model
let ReservationModel = require('../models/Reservation');
reservationRoute.route('/create-reservation').post((req, res, next) => {
  ReservationModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
reservationRoute.route('/').get((req, res, next) => {
    ReservationModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
reservationRoute.route('/edit-reservation/:id').get((req, res, next) => {
   ReservationModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
reservationRoute.route('/update-reservation/:id').put((req, res, next) => {
  ReservationModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Reservation successfully updated!')
    }
  })
})
// Delete
reservationRoute.route('/delete-reservation/:id').delete((req, res, next) => {
  ReservationModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = reservationRoute;