const db = require("../models")

app.put("/api/user", function(req,res){
    db.User.update({ 
        Points: req.body.updatedPoints
    })
}, {
    where: {
        id: req.body.userId
    }

}).then(function(pointData){
    res.json(pointData)
})
