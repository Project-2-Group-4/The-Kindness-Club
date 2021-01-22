<<<<<<< HEAD
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
=======
// function for getting kindness act to generate to page

 $("#act").on("click", function(event) {

    event.preventDefault();
 

    var kindAct = {
   kindness_Act: $("").val().trim().serializ(),
   points: $("").val().trim().parseInt().serialize()
     
    };

    // Send the Get request for the kindact and points assocaited.
    $.ajax("", {
      type: "GET",
      data: kindAct
    }).then(
      function() {
        console.log("Kindness Act Generated");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  
  });
>>>>>>> laurenfe
