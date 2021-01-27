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

    app.put("/api/task/:id", function (req, res) {
      db.Tasks.update(req.body,
        {
          where: {
           id: req.params.id
          }
        })
        .then(function (dbTask) {
          res.json(dbTask);
        });

    });
  };

//   app.put("/api/task/:id", (req, res) =>
//     db.post.update({
//       title: req.body.title,
//       content: req.body.content
//     },
//       {
//         where: {
//           id: req.params.id
//         }
//       }).then((result) => res.json(result))
//   );

  

// };







