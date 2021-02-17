const express = require("express");
var app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    
})

app.listen(3000,function(){
    console.log("server is started on port 3000");
})