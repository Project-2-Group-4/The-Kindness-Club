// const { brotliDecompress } = require("zlib");
var db = require("../models");

module.exports = function (app) {
  // Get route for returning kind tasks and points 
  app.get("/api/user", function (req, res) {
 
    db.User.findAll({

     
    }).then(function (dbBadge) {
      res.json(dbBadge);
      console.log(dbBadge);
    });
  }
  );

  // PUT route for updating posts
  app.put("/api/user/:id", function (req, res) {
    db.User.update(req.body,
      {

        where: {
          id: req.params.id
        }
      })
      .then(function (dbUser) {
        res.json(dbUser);
        console.log("userpts", dbUser)
        console.log(req.params.id)
      });
  });

};