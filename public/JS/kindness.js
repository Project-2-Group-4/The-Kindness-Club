// let task_complete = document.getElementById = ('completed').addEventlister("checkbox", completeTask);


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