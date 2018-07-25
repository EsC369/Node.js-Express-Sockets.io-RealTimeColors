const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var color = "pink";
    
io.on("connection", function (socket) {

  socket.on("red", function(){
    console.log("Recieved");
    io.emit("color", {clr: "red"});
  });

  socket.on("purple", function(){
    console.log("Recieved");
    io.emit("color", {clr: "purple"});
  });

  socket.on("green", function(){
    console.log("Recieved");
    io.emit("color", {clr: "green"});
  });
  
});