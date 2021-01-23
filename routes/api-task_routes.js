// const { brotliDecompress } = require("zlib");

// const { sequelize } = require("../models");
var db = require("../models");


module.exports = function (app) {
  // Get route for returning kind tasks and points 
  //  app.get("/api/task", function(req, res) {
   
  // db.Tasks.findAll({
     
  //   }).then(function(dbTask) {
  //     res.json(dbTask);
  //     console.log(dbTask);
  //       console.log("working");
  //   });
 
  // var acts = kindActs[Math.floor(Math.random() * kindActs.length)];

  
  // app.get('/api/tasks/', function (req, res) {
    // db.query("SELECT * FROM Tasks ORDER BY RAND() LIMIT 1", function (err, data) {
    //   if (err) {
    
    //     return res.status(500).end();
          
    //   }
    //   console.log(data, "hello");
    //   res.json("kindness", { task: data });
        
    // });
  

  
    // });

  // add math.random function 

     app.get("/api/task", function(req, res) {
       const randomID =1
        //  [Math.floor(Math.random() * randomID.length)];

      //  db.Task.findAll({ order: 'random()', limit: 1 })
        db.Task.findOne({
          where: {
            id: randomID
          }
        })
          .then(function(task) {
            res.json(task)
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
    });
  
    



  }
  

