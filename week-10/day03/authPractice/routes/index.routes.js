const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/route-guard");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/profile", isLoggedIn, (req, res) => {
  console.log("sess from the profile page", req.session);
  const loggedInUser = req.session.currentUser;
  res.render("profile.hbs", { loggedInUser });
});

module.exports = router;
