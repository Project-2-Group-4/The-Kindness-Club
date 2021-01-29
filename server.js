const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// const env = require('dotenv').config({path:'./.env'});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(session({ secret: 'nw bootcamp', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.png'));

// var session = require('express-session')
var MemoryStore = require('memorystore')(session)
 
app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat'
}))

//Set the templating engine for views as handlebars!
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;

// ===== Models ======
const models = require("./models");

// ===== Routes ======
require("./routes/html-routes.js")(app);
require('./routes/auth-routes.js')(app, passport);
require('./routes/api-task_routes.js')(app);
/*
require('./routes/api-badge_routes.js')(app);
require('./routes/api_signin_routes.js')(app);
*/
require('./config/passport/passport-config.js')(passport, models.User);
 
models.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}).catch(function(err) {
    console.log(err, "Something went wrong when attempting to sync the database.");
});

