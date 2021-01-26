
// var ptBal=dbBadge[1].Points




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
     newPoints 
     
   })
 })
 
  $.get("/api/task", function (task) {
    console.log("task", task);
    //  console.log("task", task.PointsEarned);
 
    let pts = task.PointsEarned
    let pointsContainer = Object.assign(pts)
    var total = []
    console.log(pts + pointsContainer)
    var arr = [{ pts }, { pointsContainer }];
    console.log(arr)
 
    total.push({ arr },{ pointsContainer });
    
   console.log(total)
    
    var elTask = document.querySelector('#daily-task')
    elTask.textContent = task.TaskName 
    var elPts=document.querySelector('.pts')
    elPts.textContent = task.PointsEarned 
     
    var ptsbalence=document.querySelector("#pts-bal")
   ptsbalence.textContent = task.PointsEarned + pointsContainer

  });
})
var pointScore = 0;
var button = document.querySelector("#complete");
//var pointsBalance = document.querySelector("#points-balance")

button.addEventListener("click", function (e) {

  pointScore++;
  button.textContent = "Your points balance is:" + pointScore;

  
})



    var elTask = document.getElementById('daily-task')
    elTask.textContent = task.TaskName

   

task.onclick = function () {

      
  var elPoints = document.getElementById('points')
  elPoints.textContent = "Worth:" + Tasks.pointsEarned

  // new task is shown in div by refreshing the page
  window.location.reload()


   

  //     task.onclick = function 
  //       // append points to page for user id logged in
  //       // this is keeping track of points and awarding them to the user id logged in
  //       //added default value of 100 in task.js for models
  //       var elPoints = document.getElementById('points')
  //       elPoints.textContent = "Worth:"+ Tasks.pointsEarned
  //       // new task is shown in div by refreshing the page
  //       window.location.reload()





  /* 
  append task to page ---DONE
  get random task to append too page --- DONE
  get point value to append to page -- DONE
  event handler to mark task complete to get points 
  button clicked =points are earned and new task is populated on kindness page -- DONE
  user id and task id are written to table 
  every time user clicks button update user score with points earned 
  */



  //  //mark task as completed in the db
  //  // if(task) {
  //  //    'complete' === clicked
  //  // }.then{(

  //  //    //completed  ===  true
  //  //    //award points to user id

  //  // )}


  //  // append points to page for user id logged in
  //  // this is keeping track of points and awarding them to the user id logged in
  //  //added default value of 100 in task.js for models


}