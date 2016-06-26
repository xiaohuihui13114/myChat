var express =require('express');
var app=express();
var http=require('http').Server(app);
var io=require("socket.io")(http);
var user =[];
app.get("/",function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('news_chat', function(msg){
        socket.userIndex = user.length;
        console.log(user.length);
        console.log(socket.userIndex);
        console.log('news: ' + msg);
        io.emit('news_chat', msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
http.listen(3000,function () {
    console.log("localhost:3000");
});