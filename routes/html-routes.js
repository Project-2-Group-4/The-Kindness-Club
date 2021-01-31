var path = require("path");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect("/home");
    });

    app.get('/home', function (req, res) {
        res.render("home");
    });

    app.get("/signin", function (req, res) {
        res.render("signin", {error: req.flash('error')});
        if (req.user) {
            res.redirect("/kind");
        }
    });

    app.get("/register", function (req, res) {
        // If the user already has an account send them to the login page
        if (req.user) {
            res.redirect("/kind");
        }
        res.render("register", {error: req.flash('error')});
    });

    app.get("/kind", function (req, res) {
        if (req.user) {
            res.render("kindness", {User: req.user});
        }else{
            res.redirect("/signin");
        }
    });

    app.get("/reward", function (req, res) {
        res.render("reward"); 
    });

};
