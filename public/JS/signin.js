// references to our form and inputs
// line 11 validates that there is both a username and password entered
// line 19 if we have a username and password we run the login function and clear the form

let submit=document.getElementById("submit").addEventListener("click",function () {

  var login = document.getElementsByClassName("mb-3")
  var username = document.getElementById("username")
  var password = document.getElementById("password")

  login.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      username: username.val().trim(),
      password: password.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

  
    userLogin(userData.username, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });


  
  // loginUser does a post to our "api/login" route and if successful, redirects us the the kindness page


  function userLogin(username, password) {
    $.post("/api/signin", {
    username: username,
      password: password
    })
      .then(function () {
        window.location.replace("/kindness");
       
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
