$(document).ready(function() {

  /* Your Javascript Here */
  $("#submit").click(function () {
var myStatus=$("#status").val()
if (myStatus === "") {
  alert("You need to enter a status")
}else{
  $(".post").append("<div class = 'message'>" + "<img class = 'avatar' src = 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png'>"+ "<div class='text'>" + myStatus + "<button>Like</button></div></div>")
  $()
}

})
});
