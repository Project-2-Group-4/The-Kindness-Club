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
        const randomTask = tasks[randomNumber]
        res.json(randomTask)
      });
  });

  app.get("/api/user", function(req, res){
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(function(user) {
      res.json(user);
    });
  })

  app.put("/api/user", function(req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.user.id
        }
      })
      .then(function(p) {
        res.json(p);
      });
  });
};


  // PUT route for updating task with userId
  // app.put("/api/task", function (req, res) {
  
  //   db.Task.create({
  //     PointsEarned: PointsEarned

  //   })
  //     .then( res.redirect("/api/task"))
  //     .catch(err => console.log(err))
    
    
  // });


  //   app.get("/api/points", function (req, res) {
  //   db.Tasks.update(req.body,
  //     {
  //       where: {
  //         PointsEarned: req.body.PointsEarned
  //       }
  //     })
  //     .then(function (task) {
  //       res.json(task);
  //     });
  // });


  









