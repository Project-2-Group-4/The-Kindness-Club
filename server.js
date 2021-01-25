const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
const env = require('dotenv').config({path:'./.env'});

//conection to jawsDB
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(session({ secret: 'nw bootcamp', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

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
require('./routes/api-badge_routes.js')(app);
require('./routes/api_signin_routes.js')(app);
require('./config/passport/passport-config.js')(passport, models.User);
 
models.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}).catch(function(err) {
    console.log(err, "Something went wrong when attempting to sync the database.");
});
