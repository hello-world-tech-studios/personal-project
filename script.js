$(document).ready(function() {

  /* Your Javascript Here */
  $('.the-button').on('click', function() {
    var  e = prompt("what company would you like to go to?")
    location.href = 'http://www.' + e + '.com';
  });
  $('.thelink1').on('click', function() {
    var  a = alert("you need to get a developer to write your code (the best developer: max vale) and come up with an idea and a name, then you buy the name, here is a website where you can buy the name.")

  });
  $('.sponsors').on('click', function() {
    var b = alert("we currently have no sponsors, you could be the first and get free advertising.")
  });
  $('.home').on('click', function() {
    var c = alert("you are at the home page.")
    
  });
});
