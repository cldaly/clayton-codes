var express = require("express");
var app = express();
var enforce = require('express-sslify');

// Set port
var port = process.env.PORT || 3200;

// Force ssl/https redirect
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Set app engine + style's dir
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES

// Landing page
app.get("/", function(req, res){
	res.render("landing");
});

// Full Stack of Cards
app.get("/full-stack-cards", function(req, res){
	res.render("full-stack-cards", {titleAddon: "Full Stack of Cards"});
});

// Musix App
app.get("/musix-app", function(req, res){
	res.render("musix-app", {titleAddon: "Musix App"});
});

// Train Ticket
app.get("/train-ticket", function(req, res){
	res.render("train-ticket", {titleAddon: "Train Ticket"});
});

// My Spirit Circle
app.get("/my-spirit-circle", function(req, res){
	res.render("my-spirit-circle", {titleAddon: "My Spirit Circle"});
});

// Riley's Candles
app.get("/rileys-candles", function(req, res){
	res.render("rileys-candles", {titleAddon: "Riley's Candles"});
});

// Tic Tac Toe
app.get("/tic-tac-toe", function(req, res){
	res.render("tic-tac-toe");
});


app.get("/*", function(req, res){
	res.redirect("/");
});

app.listen(port, function(){
	console.log(`Server running on port ${port}`);
});