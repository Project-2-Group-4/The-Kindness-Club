// const { brotliDecompress } = require("zlib");
var db = require("../models");
// var User= require("../models/user");


module.exports = function (app) {

  app.get("/api/user", function (req, res) {

    db.User.findAll({

    }).then(function (dbUser) {
      res.json(dbUser);
      console.log(dbUser);
      console.log("working");
    });
  });

  app.get("/api/user/:id",
    function (req, res) {
      db.User.findOne({
        where: {

          id: req.params.id
        },
        include: [db.Badge]
      })
        .then(function (dbUser) {
          res.json(dbUser)
          console.log(dbUser);
          console.log("working");

        });
    });
  app.put("/api/user", function (req, res) {
    console.log("current", req.user, req.body.points);

    db.User.update({
      Points: req.body.points
    },
      {
        where: {

          id: req.user.id
        }
      }, function (dbUser) {
        res.json(dbUser)
        console.log(dbUser);
        console.log("working");

      });
  })

}


/*
  app.put("/api/user", function(req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
*/
