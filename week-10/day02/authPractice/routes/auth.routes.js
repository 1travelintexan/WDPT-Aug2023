const express = require("express");
const router = express.Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
//GET route for signup
router.get("/signup", (req, res) => {
  res.render("auth/signup.hbs");
});
router.get("/login", (req, res) => {
  res.render("auth/login.hbs");
});

//Post routes
router.post("/signup", async (req, res) => {
  //check if user already exists in the DB
  try {
    let response = await UserModel.findOne({ username: req.body.username });
    if (!response) {
      //If theres no user with that username, now you create a new one
      //create a salt first
      const salt = bcryptjs.genSaltSync(12);
      const hashedPassword = bcryptjs.hashSync(req.body.password, salt);
      const newUser = await UserModel.create({
        ...req.body,
        password: hashedPassword,
      });
      res.redirect("/auth/login");
    } else {
      //send an error back to the page
      res.render("auth/signup", { errorMessage: "Username already taken" });
    }
  } catch (err) {
    console.log(err);
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email: req.body.email });
  //check if there is a user with the email
  //if no user then show the login page again with message
  if (!foundUser) {
    res.render("auth/login", { errorMessage: "Please try again" });
    //else check password for it match
  } else {
    const doesPasswordMatch = bcryptjs.compareSync(
      req.body.password,
      foundUser.password
    );
    if (doesPasswordMatch) {
      res.render("profile.hbs", { user: foundUser });
    } else {
      res.render("auth/login", { errorMessage: "Incorrect Details" });
    }
  }
});
module.exports = router;
