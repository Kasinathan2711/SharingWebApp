const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {

    const friends = "friends";

    res.render("home", {friends: friends});
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

app.listen(3000, function(req, res) {
    console.log("app is running on port 3000 successfully");
});
