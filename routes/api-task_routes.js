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
    

  // PUT route for updating task with userId
  app.put("/api/task", function (req, res) {
    db.Tasks.update(req.body,
      {
        where: {
          TasksId: req.body.TasksId
        }
      })
      .then(function (dbTask) {
        res.json(dbTask);
      });
  }) 
  
  
}



  

