const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/test-almundo-back', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() => console.log('Conexion a la base de datos establecida'))
    .catch((err) => console.error(err));
    
module.exports = mongoose;
