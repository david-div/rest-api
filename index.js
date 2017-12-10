const express = require('express');

//set up express app
const app = express();

// using the routes from the api dir
// all routes are going to start /api
app.use('/api',require('./routes/api'));

//listening for requests
// either the set up variable or port 4000
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests')
});
