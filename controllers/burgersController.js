var express = require("express");
var db = require("../models");
var router = express.Router();

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
    burger_name: req.body.burger_name,
    devoured: false
    });
    res.redirect("/");
  });

router.put("/burgers/:id", function(req, res) {
  db.Burgers.update({
    devoured: true
    }, {
    where: {
      id: req.params.id
    }
  })
    // eslint-disable-next-line no-unused-vars
    .then(function(burgerData) {
      res.json("/");
  })  
  });

module.exports = router;