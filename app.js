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

// Home page, main content
// app.get("/home", function(req, res){
// 	res.send("This is the home page");
// });

app.get("/*", function(req, res){
	res.redirect("/");
});


app.listen(port, function(){
	console.log("Server running, port 3000");
});