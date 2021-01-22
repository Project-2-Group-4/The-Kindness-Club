// const { brotliDecompress } = require("zlib");
var db = require("../models");

module.exports = function (app) {

 app.get("/api/user", function(req, res) {
   
  db.User.findAll({
     
    }).then(function(dbUser) {
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
    
    
}



 