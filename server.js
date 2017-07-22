// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Friend Finder');
})

// parse application
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req, body, null, 2))
})

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
// Sets up the Express app to handle data parsing

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(characters);
});

var friendList = 
{
  "name": "Joe Smith",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
  ],
  "dependencies": {
    "express": "^4.15.3"
  }

{
  "name": "Roger White",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}

{
  "name": "Jack Miller",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    3,
    2,
    1,
    1,
    2,
    3,
    2,
    5,
    3,
    4
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}

{
  "name": "Ferris Bueller",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    5,
    5,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    4
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}

{
  "name": "Jackie Treehorn",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}

{
  "name": "Jeff Lebowski",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    2,
    1,
    4,
    4,
    2,
    2,
    2,
    5,
    3,
    1
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}

{
  "name": "Pat Davis",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}

{
  "name": "Linda Coltrane",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    5,
    1,
    3,
    3,
    5,
    4,
    2,
    1,
    4,
    3
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}
{
  "name": "Sandy Nelson",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
    5,
    3,
    2,
    4,
    5,
    5,
    1,
    5,
    4,
    1
  ],
  "dependencies": {
    "express": "^4.15.3"
  }
}

module.exports = friendList;