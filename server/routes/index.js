/*\
 * Team: Elite Devs
 * Class: COMP 229
 * Group: 5
 * Section: 6
 * File: ./routes/index.js
\*/

var express = require("express");
var router = express.Router();

let indexController = require("../controllers/index");
let surveyController = require("../controllers/survey");

/* GET home page. */
router.get("/", surveyController.displayVisibleSuveys);

/* GET Rout for displaying Login page */
router.get("/login", indexController.displayLoginPage);
/* POST Rout for processing Login page*/
router.post("/login", indexController.processLoginPage);

/* GET Rout for displaying Register page */
router.get("/register", indexController.displayRegisterPage);
/* POST Rout for processing Register page*/
router.post("/register", indexController.processRegisterPage);

/* GET Rout to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;
