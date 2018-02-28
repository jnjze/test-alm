const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Amenity = require('../models/Amenity');

/* GET ALL HOTELS */
router.get('/', function (req, res, next) {
    Amenity.find()
        .exec(function (err, hotels) {
            if (err) return console.error(err);
            res.json(hotels);
        });
});

/* SAVE HOTEL */
router.post('/', function (req, res, next) {
    Amenity.create(req.body, function (err, post) {
        if (err) return console.error(err);
        res.json(post);
    });
});

module.exports = router;
