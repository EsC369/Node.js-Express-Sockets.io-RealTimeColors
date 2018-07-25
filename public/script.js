$(document). ready(function (){
    
  var socket = io();

  $("#red").click(function(){
    console.log("clicked me");
    socket.emit("red");
  });

  $("#purple").click(function(){
    console.log("clicked me");
    socket.emit("purple");
  });

  $("#green").click(function(){
    console.log("clicked me");
    socket.emit("green");
  });
//---------------
  socket.on("color", function(data){
    $("body").css("background-color", data.clr)
  });

});