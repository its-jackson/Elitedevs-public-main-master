/*\
 * Team: Elite Devs
 * Class: COMP 229
 * Group: 5
 * Section: 6
 * File: ./models/question.js
\*/

let mongoose = require("mongoose");

let Schema = mongoose.Schema;
let Model = mongoose.model;

let questionSchema = Schema({
  text: {
    type: String,
    default: "Question goes here.",
    trim: true,
    required: "Question text is required...",
  },
  type: {
    type: String,
    default: "text",
    trim: true,
    required: "Type is required...",
  },
  options: {
    type: [String],
  },
});

module.exports = Model("Question", questionSchema);
