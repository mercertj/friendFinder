// Dependencies
// =============================================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse json
app.use(bodyParser.json({ type: 'application/*+json' }))

//parse some custom tyoes into a buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

//parse html body into a string
app.use(bodyParser.text({ type: 'text/html'}))

require("./htmlRoutes.js")(app); 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

