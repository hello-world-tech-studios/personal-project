$(document).ready(function() {

  /* Your Javascript Here */
  $("#pictures").on('click', function() {
    
    $(".llamacorn").attr("src", "https://i.giphy.com/media/5DlqgSpUFU4bS/giphy.webp");

    setTimeout(function(){

      $(".llamacorn").attr("src", "https://s-media-cache-ak0.pinimg.com/originals/3b/64/68/3b6468f1bcc9ba22ecef1742ba6ed17d.jpg")
      setTimeout(function(){

        $(".llamacorn").attr("src", "https://s-media-cache-ak0.pinimg.com/736x/13/ea/30/13ea30a7313f84265797ce8d2b770672.jpg")  
        setTimeout(function(){

          $(".llamacorn").attr("src", "https://pbs.twimg.com/profile_images/378800000250050183/508fcaf746ea9074647b86b8d05953f0_400x400.jpeg")

        }, 5000)

      },5000)

    }, 5000)

  });

  $("#message").on("click", function() {
    
    var messagePrompt = prompt("send a message to a real unicorn!"); 
    var unicornMessage = Math.floor(Math.random() * 4);
    var questionMark = messagePrompt[messagePrompt.length-1]

    if (questionMark=="?"){
      alert("It looks like you are trying to ask me a question. Sadly I am too busy with my other fans to answer your questions. Have a magical day!!")
    }

    else{
    console.log(messagePrompt)
    if(unicornMessage==0){
      alert("Hello, friend I hope you are having a magical day! I hope that unicorns fart rainbows all over your day🦄🦄🦄🌈🌈🌈🌈!")
    }
    else if(unicornMessage==1){
      alert("Hello friend, thank you for the wonderful message you sent me, I hope you have a macical day!!")
    }
    else if(unicornMessage==2){
      alert("Hello friend, thank you for taking time to write me that lovely letter! I hope you have a wonderful day full of rainbows and sunshine!")
    }
    else if(unicornMessage==3){
      alert("Hello friend, I hope you have a magical day filled with rainbows and sparkles!!")}
    }
  })

});


// Math.floor(Math.random() * 4)