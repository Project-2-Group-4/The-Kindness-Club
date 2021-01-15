const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
const env = require('dotenv').config({path:'./.env'});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(session({ secret: 'nw bootcamp', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

//Set the templating engine for views as handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;

// ===== Models ======
const models = require("./models");

// ===== Routes ======
require("./routes/html-routes.js")(app);
require('./routes/auth-routes.js')(app, passport);
require('./config/passport/passport-config.js')(passport, models.user);
 
models.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}).catch(function(err) {
    console.log(err, "Something went wrong when attempting to sync the database.");
});
