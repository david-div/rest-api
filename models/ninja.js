const mongoose = require('mongoose');
const Schema = mongoose.Schema;

"geometry": {
  "type": "Point",
  "coordinates": [125.6, 10.1]
}

// create geolocation schema

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  };
  coordinates: {
    type: [Number],
    // type of map we want to use, 'sphere' takes the 3d of the world into consideration
    index: "2dsphere"
  }
})

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
  },
  // from the GeoSchema schema
  geometry: GeoSchema
});

// creating a model
// Ninja model will represent the ninja collection
// and the schema showing how the data is to be formatted
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
