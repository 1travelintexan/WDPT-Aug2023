const express = require("express");
const router = express.Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const { isLoggedOut } = require("../middleware/route-guard");
//GET route for signup
router.get("/signup", (req, res) => {
  console.log("There should be no session now", req.session);
  res.render("auth/signup.hbs");
});
router.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login.hbs");
});

//Post routes
router.post("/signup", async (req, res) => {
  // //check if the password and email actually exist
  // if (req.body.email === "" || req.body.password === "") {
  //   res.render("auth/signup", {
  //     errorMessage: "Please fill out email and password",
  //   });
  // }
  // // make sure passwords are strong:
  // const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  // if (!regex.test(req.body.password)) {
  //   res
  //     .status(500)
  //     .render("auth/signup", {
  //       errorMessage:
  //         "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
  //     });
  //   return;
  // }
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

//login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("SESSION =====> ", req.session);
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
      //******* SAVE THE USER IN THE SESSION ********//
      req.session.currentUser = foundUser;
      res.redirect("/profile");
    } else {
      res.render("auth/login", { errorMessage: "Incorrect Details" });
    }
  }
});

//logout route
router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    } else {
      res.redirect("/auth/login");
    }
  });
});
module.exports = router;
