$(document).ready(function() {

  /* Your Javascript Here */
  $("#submit").click(function () {
var myStatus=$("#status").val()
if (myStatus === "") {
  alert("You need to enter a status")
}else{
  $(".post").append("<div class = 'message'>" + "<div><img class = 'avatar' src = 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png'><button class = 'likes'>Like</button></div>"+ "<div class='text'>" + myStatus + "</div></div>")
  
}
  
})
$("body").on("click", ".likes", function() {
  var color = $(this).css("background-color");
  if (color === "rgb(192, 192, 192)") {
    $(this).css("background-color", "lightblue");
  } else {
    $(this).css("background-color", "rgb(192, 192, 192)")
  }
  
})
$("body").on("keypress", function(event) {
    if (event.key == "f") {
    $("body").css("background-color", "black")
  $("body").append("<a href = 'http://www.wearetopsecret.com/' id = 'secret' >You have found the secret page</a>")
  $(".card").hide()
}
});
});
