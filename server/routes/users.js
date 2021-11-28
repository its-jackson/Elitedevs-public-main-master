/*\
 * Team: Elite Devs
 * Class: COMP 229
 * Group: 5
 * Section: 6
 * File: ./routes/users.js
\*/

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
