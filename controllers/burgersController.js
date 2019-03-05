var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function(req, res) {
  console.log("REDIRECT TO /burgers ")
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  console.log("FINDING BURGERS: ")
  db.Burgers.findAll().then(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burgers/create", function(req, res) {
  console.log("CREATE BURGER: " + req.body.burger_name)
  db.Burgers.create({
    burger_name: req.body.burger_name,
    devoured: false
    });
    res.redirect("/");
  });

router.put("/burgers/eat/:id", function(req, res) {
  console.log("PUT by ID: " + req.params.id)
  db.Burgers.update({
    devoured: true
    }, {
    where: {
//      id: req.body.id
      id: req.params.id
    }
  })
    .then(function(burgerData) {
      res.json("/");
  })  
//    res.redirect("/");
  });

module.exports = router;