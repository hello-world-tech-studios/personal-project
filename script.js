$(document).ready(function() {

  /* Your Javascript Here */
  $("button").on('click', function() {
    $(".llamacorn") .attr("src", "https://i.giphy.com/media/5DlqgSpUFU4bS/giphy.webp")
    setTimeout(function(){

    $(".llamacorn") .attr("src", "https://pbs.twimg.com/profile_images/378800000250050183/508fcaf746ea9074647b86b8d05953f0_400x400.jpeg")

    }, 5000)
    // find a way to change the src attribute
  });

});
