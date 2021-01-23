
// let task_complete = document.getElementById = ('completed').addEventlister("checkbox", completeTask);

   // BACKUP WHEEL function witout GIF IMAGE
// (() => {
//     const wheel = document.querySelector('.wheel');
//     const startButton = document.querySelector('.button');
//     let deg = 360;

//     startButton.addEventListener('click', () => {
//         wheel.style.transition = 'all 10s ease-out';
//         wheel.style.transform = `rotate(${deg}deg)`;
//     });
//     wheel.addEventListener('transitionend', () => {
//         wheel.style.transition = 'none';
//         const actualDeg = deg % 360;
//         wheel.style.transform = `rotate(${actualDeg}deg)`;
//     });
// })();
db = require('../../server')
connect = require("../../config")








$(function () {
   $(".display_task").on("click", function (event) {
      var point_value = $(this).data("pts");
      var task_name = $(this).data("displayTask");

      var newTask = task_name;
      var userpts = point_value;



//  function queryAlltask() {
//   connection.query("SELECT * FROM songs", function(err, res) {
//

}); 

      $.ajax("/api/task", {
         type: "GET",
         data: newTask,userpts
      }).then(
         function () {
            console.log("update task");
         
            location.reload();
         }
      );
   }
   );

