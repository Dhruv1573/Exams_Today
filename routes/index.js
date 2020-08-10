var express = require("express");
var router = express.Router();
var adminUserModel = require("../models/admin_user");
const https =require('https');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Login" });
});
router.get("/signup", function (req, res, next) {
  res.render("signup", {
    title: "Sign Up",
    msg: "",
  });
});
router.post("/signup", function (req, res, next) {
  var admin_username = req.body.uname;
  var admin_email = req.body.email;
  var admin_password = req.body.password;
  var admin_confirm_password = req.body.confpassword;

  var adminUserDetails = new adminUserModel({
    username: admin_username,
    email: admin_email,
    password: admin_password,
  });
  adminUserDetails.save((err, data) => {
    if (err) throw err;
    res.render("signup", {
      title: "Sign Up",
      msg: "User Registered Successfully",
    });
  });
});

//NAVBAR SECTION//
// It will render Navbar
router.get("/nav", function (req, res, next) {
  res.render("./navbar/nav", { title: "Navbar" });
});

// It will render Dashboard Page
router.get("/dashboard", function (req, res, next) {
  res.render("./dashboard/index", { title: "Dashboard" });
});
// It will render Category List Page
router.get("/categorylist", function (req, res, next) {
  res.render("./category/categorylist", { title: "categorylist" });
});
// It will render Branch List Page
router.get("/branchlist", function (req, res, next) {
  res.render("./branch/branchlist", { title: "branchlist" });
});
// It will render Profile Page
router.get("/view_profile", function (req, res, next) {
  res.render("./user/profilepage", { title: "Profile" });
});
// It will render insert Category  Page
router.get("/insertcategory", function (req, res, next) {
  res.render("./category/insertcategory", { title: "Profile" });
});
// It will render insert Category  Page
router.get("/insertbranch", function (req, res, next) {
  res.render("./branch/insertbranch", { title: "Profile" });
});
// It will render Exam List  Page
router.get("/examlist", function (req, res, next) {
  res.render("./exam/exam", { title: "Profile" });
});
module.exports = router;
