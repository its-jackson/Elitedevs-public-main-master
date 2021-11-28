/*\
 * Team: Elite Devs
 * Class: COMP 229
 * Group: 5
 * Section: 6
 * File: ./routes/survey.js
\*/

var express = require("express");
var router = express.Router();

let surveyController = require("../controllers/survey");

/* GET Survey List - READ */
router.get("/", surveyController.displaySurveyList);

/* GET create survey page - CREATE */
router.get("/create", surveyController.displayCreateSurvey);

/*POST Route for creating and adding new survey to DB - CREATE */
router.post("/create", surveyController.createSurvey);

/* GET edit survey page - UPDATE */
router.get("/edit/:id", surveyController.displayEditSurvey);

/* POST Route for editing a Survey in db - UPDATE */
router.post("/edit/:id", surveyController.editSurvey);

/* GET Route for performing a Survey delete - DELETE */
router.get("/delete/:id", surveyController.deleteSurvey);

/* GET create survey respond page - CREATE */
router.get("/respond/:id", surveyController.displaySurvey);

/* POST Route for submitting a Survey response in db - UPDATE */
router.post("/respond/:id", surveyController.createResponse);

/* GET responses based on survey id */
router.get("/responses/:id", surveyController.dispaySurveyResponses);

/* GET answers based on response id */
router.get("/answers/:id", surveyController.dispaySurveyAnswers);

/* POST toggle visibility */
router.get("/togglevisible/:id", surveyController.toggleVisibility);

/* POST toggle survey access */
router.get("/toggleenable/:id", surveyController.toggleEnable);

module.exports = router;
