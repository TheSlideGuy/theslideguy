/**
 * Mongoose Schema for the song_parts sub document.
 *
 * Primarily used in the song's collection to facilitate creating arrangements
 * for a set.
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Enumeration of valid song parts
var validPartsEnum = {
  values: 'Verse Pre-Chorus Chorus Bridge'.split(" "),
  message: '`{VALUE}` is not a valid song part.'
};

// Schema definition of song parts
var partSchema = new Schema({
  song_part: { type: String, required: true, unique: true, enum: validPartsEnum },
  parts: [{
    type: String, required: true
  }]
});

// Export the Schema.
// A song part cannot be treated as its own object.
// It must be used in the context of a parent, like as part of a song.
module.exports = partSchema;