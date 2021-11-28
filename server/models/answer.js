/*\
 * Team: Elite Devs
 * Class: COMP 229
 * Group: 5
 * Section: 6
 * File: ./models/answer.js
\*/

let mongoose = require("mongoose");

let Schema = mongoose.Schema;
let Model = mongoose.model;

let answerSchema = Schema({
  questiontext: {
    type: String,
    required: true,
  },
  answertext: {
    type: String,
    required: true,
  },
});

module.exports = Model("Answer", answerSchema);
