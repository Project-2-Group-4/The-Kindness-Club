
     // task.onclick = function () {
      //   // append points to page for user id logged in
      //   // this is keeping track of points and awarding them to the user id logged in
      //   //added default value of 100 in task.js for models
      //   var elPoints = document.getElementById('points')
      //   elPoints.textContent = "Worth:"+ Tasks.pointsEarned
      //   // new task is shown in div by refreshing the page
      //   window.location.reload()

// const { notBetween } = require("sequelize/types/lib/operators");



// const task = require("../../models/task")

      /* 
      append task to page ---DONE
      get random task to append too page --- DONE
      get point value to append to page
      event handler to mark task complete to get points 
      button clicked =points are earned and new task is populated on kindness page -- DONE
      user id and task id are written to table 
      every time user clicks button update user score with points earned 
      */



//  let task= require("../../models/task")


$(document).ready(function () {

  $.get("/api/task", function (task) {
    console.log("task", task)


    var elTask = document.getElementById('daily-task')
    elTask.textContent = task.TaskName

  
  })
 
  $.get("/api/task", function (task) {
   
    var pointsEarned = document.getElementById("pointsEarn");
    pointsEarned.textContent = task.PointsEarned
   
    console.log(task.PointsEarned)
  
 
  }
  )





  $("#complete").on("click", function () {
   
    
    var newPoints = {
      points: 100,
      output: 0
 
    }
    $.ajax({
      url: "/api/user",
      method: "PUT",
      data: newPoints
    })
      .then(function () {
       
        window.location.reload()
  
      })
  
  
    // $.get("/api/points", function (dbpts) {
    //   $.ajax({
    //     url: "/api/points",
    //     method: "GET",
    //     data: dbpts
    //   })
    //     .then(function () {
    //       document.getElementById("output").innerHTML = JSON.stringify(dbpts)
    //     })
    //   console.log(newPoints)

    });
  });





  

  


      

// you can loop thru this indevidually  allow to turn something into an itterable array filter() map() reduce()

      