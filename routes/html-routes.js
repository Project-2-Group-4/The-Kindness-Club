var path = require("path");

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Welcome to The Kindness Club');
    });

    app.get('/signin', function(req, res) {
        // res.send('Welcome to The Kindness Club');
    });
};