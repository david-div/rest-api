const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
    // message if they don't enter a name
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geo location
});

// creating a model
// Ninja model will represent the ninja collection
// and the schema showing how the data is to be formatted
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
