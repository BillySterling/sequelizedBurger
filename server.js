var express = require("express");
var db = require('./models');
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

db.sequelize.sync({ force: true }).then(function() {

  app.listen(PORT, function() {
    // eslint-disable-next-line no-console
    console.log("App listening on PORT " + PORT);
  });
});