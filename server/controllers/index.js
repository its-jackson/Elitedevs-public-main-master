/*\
 * Team: Elite Devs
 * Class: COMP 229
 * Group: 5
 * Section: 6
 * File: ./controllers/index.js
\*/

let express = require("express");
let router = express.Router;

//DB
let mongoose = require("mongoose");
let Survey = require("../models/survey");

//Passport
let passport = require("passport");

//Create User Model Instance
let userModel = require("../models/user");
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
  //Find and list all the surveys
  res.render("/", {
    title: "Home",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayLoginPage = (req, res, next) => {
  // check if user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      message: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/survey");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }

    //is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server err?
      if (err) {
        return next(err);
      }
      return res.redirect("/survey");
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      message: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/survey");
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error, Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Register",
        message: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      return passport.authenticate("local")(req, res, () => {
        res.redirect("/survey");
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
