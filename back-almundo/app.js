const express = require('express'),
  mongoose = require('./config/dbconfig')
  path = require('path'),
  cors = require('cors'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

const hotels = require('./routes/hotels');
const amenities = require('./routes/amenities');
const app = express();

app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

app.use('/api/v1/hotels', hotels);
app.use('/api/v1/amenities', amenities);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  res.json(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
