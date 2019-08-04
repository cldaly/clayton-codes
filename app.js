var express = require("express"),
	app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES

// Landing page
app.get("/", function(req, res){
	res.render("landing");
});

// My Spirit Circle
app.get("/my-spirit-circle", function(req, res){
	res.render("my-spirit-circle");
});

// Riley's Candles
app.get("/rileys-candles", function(req, res){
	res.render("rileys-candles");
});

// Tic Tac Toe
app.get("/tic-tac-toe", function(req, res){
	res.render("tic-tac-toe");
});


app.get("/*", function(req, res){
	res.redirect("/");
});

app.listen(port, function(){
	console.log("Server running, port 4000");
});