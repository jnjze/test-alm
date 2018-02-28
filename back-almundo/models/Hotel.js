const mongoose = require('mongoose');

let HotelSchema = new mongoose.Schema({
  name: String,
  stars: Number,
  price: Number,
  image: String,
  amenities: [String]
});

module.exports = mongoose.model('Hotel', HotelSchema);
