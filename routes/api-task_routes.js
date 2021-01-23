// const { brotliDecompress } = require("zlib");

 var db = require("../models");

module.exports = function (app) {
  // Get route for returning kind tasks and points 
   app.get("/api/task", function(req, res) {
   
  db.Tasks.findAll({
     
    }).then(function(dbTask) {
      res.json(dbTask);
      console.log(dbTask);
        console.log("working");
    });
  });

        app.get("/api/task/:id",
        function (req, res) {
            db.Tasks.findOne({
              where: {
              
                   id: req.params.id
              },
              include: [db.Badge]
            })
                .then(function (dbTask) {
                  res.json(dbTask)
                  console.log(dbTask);
                  console.log("working");
                    
                });
        });
    
  
    
  // PUT route for updating task with userId
  app.put("/api/task", function(req, res) {
    db.Tasks.update(req.body,
      {
        where: {
         TasksId: req.body.TasksId
        }
      })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });
};
    

