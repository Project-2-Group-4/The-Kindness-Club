

// const totalUserPoints = User.points + task.PointsEarned
// UPDATE USER:
// front end =>
// //when the user clicks the complete button, there is an UPDATE to the USER table.
// Find user => where id = User.id
// data: { points: totalUserPoints }

$(document).ready(function () {
 
  $.get("/api/task", function (task) {
    console.log("task", task);
    $.get("/api/user", function (dbUser) {
     (dbUser)
            console.log("user",dbUser);

      //  console.log("task", task.PointsEarned);
 
      let pts = task.PointsEarned
      let pointsContainer = Object.assign(pts)
      var total = []
      console.log(pts + pointsContainer)
      var arr = [{ pts }, { pointsContainer }];
      console.log(arr)
 
      total.push({ arr }, { pointsContainer });
    
      console.log(total)
    
      var elTask = document.querySelector('#daily-task')
      elTask.textContent = task.TaskName
      var elPts = document.querySelector('.pts')
      elPts.textContent = task.PointsEarned
     
      var ptsbalence = document.querySelector("#pts-bal")
      ptsbalence.textContent = task.PointsEarned + pointsContainer

    });
  })
})
function getUserPts(dbUser,id,) {
console.log("newUser",dbUser);
 
  $.ajax({
    url: "/api/user/" + id,
    method: "PUT",
    body: JSON.stringify(dbUser)
    // data: dataPts
  })
    .then(function (dbUser) {
      console.log("dbDATA", dbUser)
       
 
    });
  

}
    

    
  
// };
   


  // function updateScore(id) {
  //   $.ajax({
  //     url: "/api/user/" + id,
  //     method: "PUT"
  //   })
  //     .then(function (dbdata) {
  //       console.log("dbDATA", dbdata)
  //     })

  // }

//   )
