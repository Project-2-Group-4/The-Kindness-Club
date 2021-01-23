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
            res.redirect("/register");
        }
        res.render("register", {error: req.flash('error')});
    });

    app.get("/kind", function (req, res) {
        if (typeof req.user === 'undefined') {
            res.redirect("/signin");
        }
        res.render("kindness", 
            {User: 
                { 
                    UserName: req.user.UserName, 
                    Points: req.user.Points, 
                    FirstName: req.user.FirstName, 
                    LastName: req.user.LastName 
                }
            }
        );
    });

    app.get("/reward", function (req, res) {
        res.render("reward"); 
    });

};