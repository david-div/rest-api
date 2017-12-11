const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

// connect to mongodb, will create a new db ninjago
mongoose.connect('mongodb://localhost/ninjago');

// setting mongooses promise to the global promise as it's deprecated
mongoose.Promise = global.Promise

// index view in public folder
app.use(express.static("public"));

// only receiving json format
// above the routes so routes is then able to use it
// all app.use middleware in order
app.use(bodyParser.json());

// using the routes from the api dir
// all routes are going to start /api
// initialise the routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
  // console.log(err)
  // status of page updates from 200 to 422
  // err.message, from whats been sent as didn't load
  res.status(422).send({ error: err.message})
});

//listening for requests
// either the set up variable or port 4000
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests')
});
