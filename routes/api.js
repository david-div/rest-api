const express = require('express');
const router = express.Router();
const Ninja = require("../models/ninja")

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
  res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
  // request is taking from bodyParser json, being sent in the body (from postman atm)
  // from the model/schema
  // .create mongoose funct, creates a new instance and saves it
  Ninja.create(req.body)
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank
  });
});

// update a ninja in the db
// :id is going to be a varialbe name
router.put('/ninjas/:id', function(req, res){
  res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
  res.send({type: 'DELETE'});
});


// all of the routes have been mounted onto router
// so only need to export the one module
module.exports = router;
