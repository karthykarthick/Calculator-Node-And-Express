const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    console.log(req.body);
    res.send("Thanks for adding");
})

app.listen(3000,function(){
    console.log("server is started on port 3000");
})