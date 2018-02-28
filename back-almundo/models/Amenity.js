const mongoose = require('mongoose');

let AmenitySchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Amenity', AmenitySchema);