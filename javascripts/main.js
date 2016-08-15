document.addEventListener("DOMContentLoaded", function(){
  var requestMain = new XMLHttpRequest();
  var requestRepo = new XMLHttpRequest();
  var name = document.querySelector(".name");
  var blog = document.querySelector(".blog");
  var location = document.querySelector(".location");
  var email = document.querySelector(".email");
  var url__avatar = document.querySelector(".url__avatar");
  var url__html = document.querySelector(".url__html");

  requestMain.addEventListener("load", function(e){
    var responseMain = JSON.parse(e.target.response);
    name.textContent += requestMain.name;
    blog.textContent += requestMain.blog;
    location.textcontent += requestMain.location;
    email.textContent += requestMain.email;
    url__html.href = requestMain.html_url;
    url__avatar.src = requestMain.avatar_url;


    console.log(responseMain);
  });




  requestMain.open("GET", "https://api.github.com/users/maxamey")
  requestMain.send(null);



});
