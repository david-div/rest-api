const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

// connect to mongodb, will create a new db ninjago
mongoose.connect('mongodb://localhost/ninjago');

// setting mongooses promise to the global promise as it's deprecated
mongoose.Promise = global.Promise

// only receiving json format
// above the routes so routes is then able to use it
app.use(bodyParser.json());

// using the routes from the api dir
// all routes are going to start /api
// initialise the routes
app.use('/api',require('./routes/api'));

//listening for requests
// either the set up variable or port 4000
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests')
});
