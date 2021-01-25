// const { brotliDecompress } = require("zlib");

// const { sequelize } = require("../models");
var db = require("../models");


module.exports = function (app) {

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

  app.get("/api/task", function (req, res) {
    db.Task.findAll({})
       .then(function (tasks) {
         console.log("tasks", tasks.length)
         const randomNumber = getRandomIntInclusive(0, tasks.length)
         const randomTask=tasks[randomNumber]
        res.json(randomTask)
      });
  });
    app.get("/api/points", function(req, res) {
    db.Task.findAll({}).then(function(dbpts) {
      res.json(dbpts);
      console.log(dbpts)
    });
  });
    
  // PUT route for updating task with userId
  app.put("/api/task/user", function (req, res) {
    db.Tasks.create(req.body,
      {
        where: {
   PointsEarned: req.body.PointsEarned
        }
      })
      .then(function (task) {
        res.json(task);
        console.log(task)
      });
  }) 
  
  
}



  

