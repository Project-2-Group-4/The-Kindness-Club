// const { brotliDecompress } = require("zlib");
var db = require("../models");

module.exports = function (app) {
  // Get route for returning kind tasks and points 
  app.get("/api/reward", function (req, res) {
 
    db.Badge.findAll({
     
    }).then(function (dbBadge) {
      res.json(dbBadge);
      console.log(dbBadge);
    });
  }
  );

  app.get("/api/reward/:",
    function (req, res) {
      db.Badge.findOne({
        where: {
          id: req.params.Badge
        },
        // include: [db.User]
      })
        .then(function (dbBadge) {
          res.json(dbBadge)
          console.log(dbBadge);
          console.log("working");
                    
        });
    });
}