var tableData = require ('../data/table-data.js')


app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/survey", function(req, res) {
  var newUser = req.body;
  newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

  console.log(newUser);

  characters.push(newUser);

  res.json(newUser);
});