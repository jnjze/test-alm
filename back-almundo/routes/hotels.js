const express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Hotel = require('../models/Hotel'),
  Amenity = require('../models/Amenity');

/* GET ALL HOTELS */
router.get('/', function (req, res, next) {
  Hotel.find()
    .exec(function (err, hotels) {
      if (err) return console.error(err);
      res.json(hotels);
    });
});

/* GET SINGLE HOTELS BY ID */
router.get('/:id', function (req, res, next) {
  Hotel.findById(req.params.id, function (err, post) {
    if (err) return console.error(err);
    res.json(post);
  });
});

router.post('/filter-hotels', function (req, res, next) {
  let data = req.body;
  let filter = {};
  if (data.name) {
    filter.name = new RegExp(data.name, 'i');
  }

  if (data.stars && data.stars.length > 0) {
    filter.stars = { $in: data.stars }
  }

  Hotel.find(filter)
  .exec(function (err, hotels) {
    if (err) return console.error(err);
    res.json(hotels);
  });
});

/* SAVE HOTEL */
router.post('/', function (req, res, next) {
  Hotel.create(req.body, function (err, post) {
    if (err) return console.log(err);
    res.json(post);
  });
});

/* UPDATE Hotel */
router.put('/:id', function (req, res, next) {
  Hotel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Hotel */
router.delete('/:id', function (req, res, next) {
  Hotel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
