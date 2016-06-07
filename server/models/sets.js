/**
 * Mongoose Schema for the sets collection
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setSchema = new Schema({
  title: { type: String, required: true, unique: true },
  service_date: { type: Date, required: true },
  songs: [{
    _songId: Schema.Types.ObjectId,
    arrangement: [{
      songPart: { type: String, required: true },
      index: { type: String, required: true }
    }]
  }]
});

// Export the model
module.exports = mongoose.model('Set', setSchema);