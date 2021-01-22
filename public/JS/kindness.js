
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

//function for spinning the wheel 
// function spin(data){
//    container.on("click");

// }

//act of kindness data


// let show_task = document.getElementById = ('completed').addEventlister("click", completeTask);

var task_btn = document.getElementById('completed')

let task = document.getElementById("task");

let points=document.getElementById("points")




displayTask.addEventListener("toggle", function () {
   if ("toggle") {
   
      task.hide()
   }
   else {
      task.show()
      points.show()
   }
console.log("displayTask")
})

displayTask()
