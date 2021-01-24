$(document).ready(function () {


 $("#complete").on("click", function(){
   var newPoints = {
     points: 100
   }
   $.ajax({
     url: "/api/user", 
     method: "PUT",
     data: newPoints
   }).then(function(){
     window.location.reload()
   })
 })


  $.get("/api/task", function (task) {
    console.log("task", task);


    var elTask = document.getElementById('daily-task')
    elTask.textContent = task.TaskName

   

    task.onclick = function () {
      // append points to page for user id logged in
      // this is keeping track of points and awarding them to the user id logged in
      //added default value of 100 in task.js for models
      var elPoints = document.getElementById('points')
      elPoints.textContent = "Worth:"+ Tasks.pointsEarned
      // new task is shown in div by refreshing the page
      window.location.reload()

      /* 
      append task to page ---DONE
      get random task to append too page --- DONE
      get point value to append to page
      event handler to mark task complete to get points 
      button clicked =points are earned and new task is populated on kindness page -- DONE
      user id and task id are written to table 
      every time user clicks button update user score with points earned 
      */

    }


  })
})