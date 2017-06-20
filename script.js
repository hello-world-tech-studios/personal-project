$(document).ready(function() {

  /* Your Javascript Here */
  $('.the-button').on('click', function() {
    var  e = prompt("what company would you like to learn about?")
    if (e === "google"){
      alert("copy and paste this url: https://www.google.com")
    }else if(e === "stack overflow"){
      alert("copy and paste this url: https://www.stackoverflow.com")
    }else if (e === "amazon"){
      alert("copy and paste this url: https://www.amazon.com")
    }
  });
});
