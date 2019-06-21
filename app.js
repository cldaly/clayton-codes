var express = require("express"),
	app = express();

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