var express = require("express");
var db = require("../models");
var router = express.Router();

debugger;
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burgers.findAll().then(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burgers/create", function(req, res) {
  db.Burgers.create({
    id: null,
    burger_name: req.body.burger_name,
    devoured: false
    });
    res.redirect("/");
  });

router.put("/burgers/update", function(req, res) {
  db.Burgers.update({
    devoured: true
  }, {
    where: {
      id: req.body.burger_id
    }
  });
    res.redirect("/");
  });

module.exports = router;