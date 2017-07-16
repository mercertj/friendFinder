// Routes
	
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(characters);
});