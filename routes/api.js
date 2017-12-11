const express = require('express');
const router = express.Router();
const Ninja = require("../models/ninja")

// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  // // finding all the ninjas
  // Ninja.find({}).then(function(ninjas){
  //   res.send(ninjas);
  // })
  // geoNear, inbuild mongoose function
  Ninja.geoNear(
    // accessing the query string req.query, which should be number
    {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000, spherical: true}) // meters
    .then(function(ninjas){
      // once received the ninjas, send the ninjas
      res.send(ninjas);
    })
});

// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
  // request is taking from bodyParser json, being sent in the body (from postman atm)
  // from the model/schema
  // .create mongoose funct, creates a new instance and saves it
  // only fires once .create has been completed
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  // catch is if req.body fails
  // next is a funct, stating the next piece of middleware
}).catch(next);
});

// update a ninja in the db
// :id is going to be a varialbe name
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    // having to find once updated (otherwise it's the old data)
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
          res.send(ninja);
    })
  })
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
  // lookingn in the db via mongoose, for the id (from the url)
  // .then, once complete
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    // once it's found the ninja from the db, send it
    res.send(ninja)
  });
});


// all of the routes have been mounted onto router
// so only need to export the one module
module.exports = router;
