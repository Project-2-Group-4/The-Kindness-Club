var path = require("path");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render(path.join(__dirname, "../views/home"));

    });

    app.get("/signin", function (req, res) {
        res.render(path.join(__dirname, "../views/signin"));

        if (req.user) {
            res.redirect("/kindness");
        }
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the login page
        if (req.user) {
            res.redirect("/login");
        }
        res.render(path.join(__dirname, "../views/register"));
    });

<<<<<<< HEAD
    app.get("/kind", function (req, res) {
        res.render(path.join(__dirname, "../views/kindness"));
    
    });

    app.get("/reward", function (req, res) {
        res.render(path.join(__dirname, "../views/reward"));
        
    });

=======
    app.get('/signin', function(req, res) {
        // res.send('Welcome to The Kindness Club');
    });
>>>>>>> laurenfe
};