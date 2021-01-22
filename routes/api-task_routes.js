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

    app.get("/api/task/:task",
        function (req, res) {
            db.Tasks.findOne({
                where: {
                   id: req.params.Task
              },
              // include: [db.User]
            })
                .then(function (dbTask) {
                  res.json(dbTask)
                  console.log(dbTask);
                  console.log("working");
                    
                });
        });
    //  Post route for saving a new User Task
      app.post("/api/task", function(req, res) {
    console.log(req.body);
    db.Task.create({
     task_name: req.body.task_name,
     point_value: req.body.point_value,
     UserId: req.body.UserId
    })
      .then(function(dbTask) {
        res.json(dbTask);
  
      });
  });
  
    
  // PUT route for updating task with userId
  app.put("/api/task", function(req, res) {
    db.Task.update(req.body,
      {
        where: {
          UserId: req.body.UserId
        }
      })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });
};
    
    
    
